import EmailIcon from '@mui/icons-material/EmailRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import PhoneIcon from '@mui/icons-material/PhoneIphone'
import LocationIcon from '@mui/icons-material/LocationOnRounded'

interface Stat { num: string; label: string }

interface HeroProps {
  name: string
  nameAccent: string
  role: string
  tagline: string
  email: string
  linkedin: string
  github: string
  location: string
  phone?: string
  avatar?: string
  stats?: Stat[]
}

function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

export function Hero({ name, nameAccent, role, tagline, email, linkedin, github, location, phone, avatar, stats }: HeroProps) {
  return (
    <section id="inicio" className="hero">
      {/* Columna izquierda */}
      <div className="hero-left">
        <div className="hero-tag">Disponible para proyectos</div>
        <h1>{name} <em>{nameAccent}</em></h1>
        <p className="hero-role">{role}</p>
        <p className="hero-tagline">{tagline}</p>
        <div className="contact-info">
          <a href={`mailto:${email}`} className="contact-item"><EmailIcon sx={{ fontSize: 14 }} />{email}</a>
          <a href={`https://${linkedin}`} className="contact-item" target="_blank" rel="noreferrer"><LinkedInIcon sx={{ fontSize: 14 }} />{linkedin}</a>
          <a href={`https://${github}`} className="contact-item" target="_blank" rel="noreferrer"><GitHubIcon sx={{ fontSize: 14 }} />{github}</a>
          {phone && <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-item"><PhoneIcon sx={{ fontSize: 14 }} />{phone}</a>}
          <span className="contact-item"><LocationIcon sx={{ fontSize: 14 }} />{location}</span>
        </div>
      </div>

      {/* Columna derecha — panel oscuro */}
      <div className="hero-right">
        <div className="hero-pattern" />

        <div className="hero-avatar-wrap">
          {avatar
            ? <img src={avatar} alt={`${name} ${nameAccent}`} />
            : <span className="hero-avatar-initials">{getInitials(`${name} ${nameAccent}`)}</span>
          }
        </div>

        {stats && stats.length > 0 && (
          <div className="hero-stats-card">
            <div className="hero-stats-label">Trayectoria profesional</div>
            <div className="hero-stats-grid">
              {stats.map(s => (
                <div key={s.label} className="hero-stat">
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
