import { useEffect, useState } from "react";

export default function RotatingTypewriter({ lines, speed = 100, pause = 1500, startDelay = 0 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [ready, setReady] = useState(false); // new flag

  // wait before starting
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!ready || index >= lines.length) return;

    if (!deleting && subIndex === lines[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % lines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(lines[index].substring(0, subIndex + (deleting ? -1 : 1)));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, lines, speed, pause, ready]);

  return (
    <span>
      {text}
      {ready && <span className="animate-pulse">|</span>}
    </span>
  );
}
