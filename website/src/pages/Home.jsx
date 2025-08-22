import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="grid gap-6">
      <header className="text-center md:text-left">
        <motion.h1 
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        >
          Lucas de la Peña
        </motion.h1>
        <motion.p className="mt-3 text-gray-600 max-w-2xl">
          
          CS grad • Esports community lead • Micro Center tech. I build useful things across C/C++,
          Python, and React. Here are a few projects I’m proud of.{" "}
          https://miyuo.itch.io/bubble-boat
         
        </motion.p>
      </header>
    </section>



  );
}
