import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="prose max-w-none">
      <h1 >
        <motion.p
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >   
        About Me
        </motion.p>
      </h1>
      <p>
        I’m Lucas — CS grad and Esports Assistant/Community President. I like shipping
        practical tools, clean UX, and performance-minded code.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>C/C++, Python, JavaScript/React</li>
        <li>Chrome extensions, Node, Linux</li>
        <li>Unity/C#, Git, CI basics</li>
      </ul>
      <h3>Highlights</h3>
      <ul>
        <li>Led campus esports events and tournaments.</li>
        <li>Built a Chrome extension that parses product pages and opens price/stock searches.</li>
        <li>Implemented a recursive-descent parser with custom token scanner.</li>
      </ul>
    </section>
  )
}
