import { motion } from "framer-motion"

export default function ProjectCard({ project }) {
  const { title, description, tech, links = {} } = project
  return (
    <motion.article 
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    key={title}
    className="p-5 border rounded-2xl shadow-sm hover:shadow hover:bg-blue-50"
    
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <ul className="flex flex-wrap gap-2 mt-3 text-xs">
        {tech?.map(t => (
          <li key={t} className="px-2 py-1 bg-gray-100 rounded-full">{t}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3 text-sm">
        {links.repo && <a className="underline" href={links.repo} target="_blank" rel="noreferrer">Repo</a>}
        {links.demo && <a className="underline" href={links.demo} target="_blank" rel="noreferrer">Demo</a>}
      </div>
    </motion.article>
  )
}
