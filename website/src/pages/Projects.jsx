import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { fadeSlide } from '../components/animations.jsx';
import { popin } from '../components/animations.jsx';


const projects = [
  {
    title: "Micro Center Tracker (Chrome Extension)",
    description: "Scrapes product name, price, stock, SKU/UPC and jumps to Amazon/BestBuy/Walmart/Newegg searches.",
    tech: ["JavaScript", "Chrome Extensions", "DOM"],
    links: { repo: "https://github.com/yourusername/micro-center-tracker", demo: "#" }
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    tech: ["TechA", "TechB"],
    links: { repo: "#", demo: "#" }
  },
];

const courses = [
  {
    title: "Course One",
    description: "Description for course one.",
    tech: ["Topic1", "Topic2"],
    links: { details: "#" },
    skills: ["C/C++, Python, JavaScript/React", "Chrome extensions, Node, Linux", "Unity/C#, Git, CI basics"]
  },
  {
    title: "Course Two",
    description: "Description for course two.",
    tech: ["TopicA", "TopicB"],
    links: { details: "#" }
  },
];



export default function Projects() {
  const [tab, setTab] = useState('projects');
  const TabBtn = ({ id, children }) => (
    <button
      onClick={() => setTab(id)}
      className={`px-4 py-2 rounded-xl border transition
        ${tab === id ? "bg-black text-white border-black" : "hover:bg-gray-100"}`}
    >
      {children}
    </button>
  );

  return (
    <section className="grid gap-6">
      <h1 >
        <motion.p
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >   
        Projects & Courses
        </motion.p>
      </h1>
 
      <motion.section
        initial={{ opacity: 0, x : -20}}
        animate={{ opacity: 1, x : 0 }}
        transition={{duration: 0.7,}}
      >
      <div className="flex gap-4">
        <TabBtn id="projects" >Projects</TabBtn>
        <TabBtn id="courses">Courses</TabBtn>
      </div>
      </motion.section>


      <motion.div className="min-h-[320px]"
          initial={{ opacity: 0, y : 20}}
          animate={{ opacity: 1, y : 0 }}
          delay={0.2}
          transition={{
              duration: 0.7,
          }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {tab === 'projects' ? (
            <motion.div
              key="projects"
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-2 gap-4"
            >
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="courses"
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-2 gap-4"
            >
              {courses.map((c) => ( //Maybe make a CourseCard component later !!!!
                <article key={c.title} className="p-5 border rounded-2xl shadow-sm">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{c.description}</p>
                  <ul className="flex flex-wrap gap-2 mt-3 text-xs">
                    {(c.skills ?? c.tech)?.map((t) => (
                      <li key={t} className="px-2 py-1 bg-gray-100 rounded-full">{t}</li>
                    ))}
                  </ul>
                  {c.links?.details && (
                    <a className="underline text-sm mt-3 inline-block" href={c.links.details} target="_blank" rel="noreferrer">
                      Details
                    </a>
                  )}
                </article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <p className="text-gray-600">A few representative builds. I can share more on request.  https://miyuo.itch.io/bubble-boat</p>
    
    </section>
  )
}
