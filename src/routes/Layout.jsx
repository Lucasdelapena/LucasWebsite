import { Link, NavLink, Outlet } from 'react-router-dom'


export default function Layout() {
  const navLink = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition ${isActive ? 'bg-black text-white' : 'hover:bg-gray-100'}`

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 bg-white/80 backdrop-blur border-b z-10">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center"><img src={`${import.meta.env.BASE_URL}images/Logo.png`} className="h-16" /></Link>
          <div className="flex gap-2 text-center items-center">
            <NavLink to="/" className={navLink} end>Home</NavLink>
            <NavLink to="/projects" className={navLink}>Projects & Courses</NavLink>
            <NavLink to="/about" className={navLink}>About</NavLink>
            <NavLink to="/contact" className={navLink}>Contact</NavLink>
          </div>
        </div>
      </nav>

      <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Lucas de la Peña</p>
          <div className="flex gap-4">
            <a href="https://github.com/Lucasdelapena" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/lucasdelapena/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
