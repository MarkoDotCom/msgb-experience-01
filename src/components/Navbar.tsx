import { useState, useEffect } from 'react'

interface NavLink { href: string; label: string }

interface NavbarProps {
  name: string
  subtitle: string
  isDark: boolean
  onToggleTheme: () => void
  links?: NavLink[]
}

const DEFAULT_LINKS: NavLink[] = [
  { href: '#inicio',     label: 'Inicio' },
  { href: '#about',      label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#skills',     label: 'Habilidades' },
  { href: '#projects',   label: 'Proyectos' },
]

export function Navbar({ name, subtitle, isDark, onToggleTheme, links = DEFAULT_LINKS }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('inicio')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.3 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const close = () => { if (window.innerWidth < 900) setMobileOpen(false) }
    window.addEventListener('scroll', close)
    return () => window.removeEventListener('scroll', close)
  }, [])

  return (
    <nav className="main-nav">
      <span className="nav-brand">
        {name} <span className="nav-brand-dot" /> {subtitle}
      </span>

      <div className={`nav-links${mobileOpen ? ' open' : ''}`} id="nav-links">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Alternar tema"
        >
          <div className="theme-toggle-knob">{isDark ? '🌙' : '☀️'}</div>
        </button>
        <button
          className={`nav-toggle${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
