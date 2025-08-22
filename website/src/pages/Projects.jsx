import ProjectCard from '../components/ProjectCard.jsx'

const data = [
  {
    title: "Micro Center Tracker (Chrome Extension)",
    description: "Scrapes product name, price, stock, SKU/UPC and jumps to Amazon/BestBuy/Walmart/Newegg searches.",
    tech: ["JavaScript", "Chrome Extensions", "DOM"],
    links: { repo: "https://github.com/yourusername/micro-center-tracker" }
  },
  {
    title: "P2: Parser & Tree Builder",
    description: "Custom recursive-descent parser in C++ with scanner integration and parse tree structure.",
    tech: ["C++", "Compilers"],
    links: { repo: "https://github.com/yourusername/p2-parser" }
  },
  {
    title: "Unity Asteroid Arena",
    description: "First-person camera & asteroid spawner homing to center. Arcade survival vibes.",
    tech: ["Unity", "C#"],
    links: { demo: "#" }
  },
]

export default function Projects() {
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-gray-600">A few representative builds. I can share more on request.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  )
}
