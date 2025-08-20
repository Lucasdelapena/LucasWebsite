export default function Home() {
  return (
    <section className="grid gap-6">
      <header className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hi, I’m Lucas</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          CS grad • Esports community lead • Micro Center tech. I build useful things across C/C++,
          Python, and React. Here are a few projects I’m proud of.

          https://miyuo.itch.io/bubble-boat
          
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        <a href="/projects" className="p-5 border rounded-2xl shadow-sm hover:shadow transition">
          <h3 className="font-semibold mb-1">Projects</h3>
          <p className="text-sm text-gray-600">Compilers P2 parser, Micro Center Tracker extension, Unity asteroid game…</p>
        </a>
        <a href="/about" className="p-5 border rounded-2xl shadow-sm hover:shadow transition">
          <h3 className="font-semibold mb-1">About</h3>
          <p className="text-sm text-gray-600">What I’m into and how I work.</p>
        </a>
        <a href="/contact" className="p-5 border rounded-2xl shadow-sm hover:shadow transition">
          <h3 className="font-semibold mb-1">Contact</h3>
          <p className="text-sm text-gray-600">Email me or drop a quick message.</p>
        </a>
      </div>
    </section>
  )
}
