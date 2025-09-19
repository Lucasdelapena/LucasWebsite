import { motion } from 'framer-motion'
import ImageSlide from '../components/ImageSlide'

const photos = [
  `${import.meta.env.BASE_URL}images/grad.jpg`,
  `${import.meta.env.BASE_URL}images/gamejam.jpg`,
  `${import.meta.env.BASE_URL}images/half.jpg`,
  `${import.meta.env.BASE_URL}images/volleyball.jpg`,
  `${import.meta.env.BASE_URL}images/dogs.jpg`,
];



/*

please work
const photos = [
  "../assets/grad.jpg",
  "../assets/gamejam.jpg",
  "../assets/half.jpg",
  "../assets/volleyball.jpg",
  "../assets/dogs.jpg",
];
*/
export default function About() {
  return (
    <section className="prose max-w-none">
      <h1 className='pb-8'>
        <motion.p
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >   
        About Me
        </motion.p>
      </h1>
      <motion.p
      className="text-regular"
      initial={{ opacity: 0, y : 40 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ duration: 0.7}}
      >
        Hi, I’m Lucas — a Computer Science graduate and software engineer who loves bringing ideas to life through code. 
        I studied at the University of Missouri–St. Louis, where I explored machine learning, operating systems, programming languages, and game development. Through my coursework and projects I gained experience in C++, Python, React, and Unity, applying concepts like algorithms, data structures, and software design to build real applications
      </motion.p>
      <br/>
      <motion.p
      className="text-regular"
      initial={{ opacity: 0, y : 40 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      >
        I’ve always valued collaboration and teamwork, and before becoming the President of an esports community, I competed as a player, 
        which taught me the importance of communication, strategy, and working toward a shared goal. Leading the community gave me opportunities to organize events, 
        tournaments, and projects that brought people together. I’ve also experienced teamwork in creative settings like building a Unity game in just 48 hours during 
        Global Game Jam.
      </motion.p>
      <br/>
      <motion.p
      className="text-regular"
      initial={{ opacity: 0, y : 40 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ duration: 0.7 , delay: 0.4 }}
      >
        I’m a big advocate for:
        getting enough sleep, eating well, and exercising so I can bring my best self into everything I do. Outside of work, I stay active through running and volleyball, and I 
        enjoy hands on hobbies like 3D printing and gaming.
      </motion.p>
      <br/>
      <motion.p
      className="text-regular"
      initial={{ opacity: 0, y : 40 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ duration: 0.7 , delay: 0.6 }}
      >
      I’m always looking for opportunities to grow as a developer, take on challenges, and create things that make a difference. If you have any questions feel free to contact me!
      </motion.p>
      <br/>
      <br/>

      <motion.div className="mt-10" 
      initial={{ opacity: 0, y : 40 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ duration: 0.7 , delay: 0.8 }}
      >
        <ImageSlide photos={photos}/>
      </motion.div>


    </section>
  )
}
