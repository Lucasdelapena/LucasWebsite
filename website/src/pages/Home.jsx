import { motion } from "framer-motion";
import RotatingTypewriter from "../components/Typewriter";

export default function Home() {
  return (
    <section className="grid gap-6 pt-60 mx-auto pl-56">
      <header className="text-center md:text-left">
        <motion.p 
        className="text-5xl md:text-6xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        >
          Lucas de la Peña
        </motion.p>
        <p className="mt-3 text-gray-600 max-w-2xl text-4xl">

          <RotatingTypewriter
            lines={[
              "is a software engineer.",
              "graduated from University of Missouri-St. Louis",
              "brings code to life through projects",
              "is always learning, and always building.",
            ]}
            speed={60}
            pause={1500}
            startDelay={500}
          />
       
         
        </p>
      </header>
    </section>



  );
}
