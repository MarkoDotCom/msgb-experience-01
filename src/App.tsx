import ComputerIcon from '@mui/icons-material/ComputerRounded'
import StorageIcon from '@mui/icons-material/StorageRounded'
import CloudIcon from '@mui/icons-material/CloudRounded'
import HubIcon from '@mui/icons-material/HubRounded'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SectionHeader } from './components/SectionHeader'
import { ExperienceItem } from './components/ExperienceItem'
import { SkillCategory } from './components/SkillCategory'
import { ProjectCard } from './components/ProjectCard'

const HERO_STATS = [
  { num: '6+',  label: 'años de\nexperiencia' },
  { num: '40+', label: 'integraciones\nentregadas' },
  { num: '6',   label: 'industrias\natendidas' },
]

const EXPERIENCE = [
  {
    title: 'Backend Senior — Ingeniero de software',
    company: 'Americar • Dic 2025 – Abr 2026',
    period: 'Consultoría automotriz',
    description: 'Ciclo completo de desarrollo en arquitectura de microservicios multicliente (10 servicios en capas Dictionary, BFF, CRM, Core e Integration). Implementé modelo híbrido de tenancy, integraciones bidireccionales con Salesforce CRM y autenticación vía Apigee. Integré eventos Kafka para flujos de facturación y posventa. Clientes: MG, Gildemeister, Toyota, Ford y Astara.',
    tags: ['TypeScript', 'Java', 'Spring Boot', 'Kafka', 'Salesforce', 'Apigee', 'SQL'],
  },
  {
    title: 'Full Stack Senior — Ingeniero de software',
    company: 'Sii Group • Nov 2025 – Feb 2026',
    period: 'Consultoría energética',
    description: 'Rediseñé el sistema de ingreso de centrales eléctricas para Generadora Metropolitana: reemplacé una arquitectura rígida por un motor de formularios dinámicos configurables desde panel de administración, reduciendo el tiempo de onboarding de 6 semanas a configuración inmediata.',
    tags: ['React', 'Formik', 'Spring Boot', 'SQL Server'],
  },
  {
    title: 'Full Stack Semi Senior — Ingeniero de software',
    company: 'Kabeli • Mar 2025 – Sep 2025',
    period: 'Sustentabilidad / fauna',
    description: 'Desarrollé end-to-end sistema de rescate y trazabilidad de chinchillas en peligro de extinción para Gold Fields en el desierto de Atacama, habilitando cumplimiento regulatorio estatal. Implementé sincronización bidireccional en tiempo real con ArcGIS mediante webhooks, homologando capturas, diagnósticos clínicos y liberaciones entre plataformas.',
    tags: ['React', 'NestJS', 'TypeORM', 'PostgreSQL', 'ArcGIS', 'Google Maps'],
  },
  {
    title: 'Full Stack Semi Senior — Ingeniero de software',
    company: 'Serhafen Express • Nov 2024 – Feb 2025',
    period: 'Logística y distribución',
    description: 'Desarrollé CRM propio reemplazando solución SaaS externa, generando ahorro de $16.000.000 CLP mensuales en licencias. El sistema abarcó el ciclo completo de gestión aduanera operado por 40 usuarios.',
    tags: ['Angular', 'NestJS', 'PostgreSQL', 'Scrum'],
  },
  {
    title: 'Full Stack Semi Senior — Ingeniero de software',
    company: 'Infositio • Ago 2022 – Oct 2024',
    period: 'Consultoría logística',
    description: 'Lideré migración completa de monolito PHP a arquitectura de 3 capas para Starken y Bluexpress. Implementé pipeline de mensajería con Kafka, Azure Event Hubs y Service Bus para cientos de miles de eventos. Integré HERE API para optimización de rutas logísticas.',
    tags: ['Laravel', 'Angular', 'PostgreSQL', 'Kafka', 'Azure Event Hubs', 'HERE API'],
  },
  {
    title: 'Backend Junior — Ingeniero de software',
    company: 'Buk • Mar 2020 – Mar 2022',
    period: 'RRHH / contabilidad',
    description: 'Implementé soluciones de exportación configurables por cliente sobre Ruby on Rails con Database per Tenant, generando archivos importables en SAP, Softland, Contaplus y Oracle. Entregué ~40 integraciones en producción con tiempos de 1 a 2 semanas por cliente.',
    tags: ['Ruby on Rails', 'PostgreSQL', 'SAP', 'Scrum'],
  },
]

const SKILLS = [
  {
    title: 'Frontend',
    icon: <ComputerIcon sx={{ fontSize: 13 }} />,
    skills: [{ name: 'Angular / React', percentage: 94 }, { name: 'TypeScript', percentage: 92 }],
  },
  {
    title: 'Backend',
    icon: <StorageIcon sx={{ fontSize: 13 }} />,
    skills: [{ name: 'NestJS / Spring Boot', percentage: 93 }, { name: 'Ruby on Rails / Laravel', percentage: 82 }],
  },
  {
    title: 'Cloud & DevOps',
    icon: <CloudIcon sx={{ fontSize: 13 }} />,
    skills: [{ name: 'AWS / Azure / GCP', percentage: 88 }, { name: 'Docker / ArgoCD', percentage: 83 }],
  },
  {
    title: 'Mensajería & Datos',
    icon: <HubIcon sx={{ fontSize: 13 }} />,
    skills: [{ name: 'Kafka / Azure Events', percentage: 90 }, { name: 'PostgreSQL / Redis', percentage: 93 }],
  },
]

const PROJECTS = [
  {
    title: 'Sistema de Trazabilidad de Fauna',
    description: 'Plataforma end-to-end para rescate y seguimiento de chinchillas en peligro de extinción para Gold Fields en Atacama, con sincronización ArcGIS en tiempo real.',
    tags: ['NestJS', 'React', 'ArcGIS', 'PostgreSQL'],
  },
  {
    title: 'CRM Aduanero Serhafen',
    description: 'Sistema propio que reemplazó solución SaaS ahorrando $16M CLP/mes. Gestión completa del ciclo aduanero para 40 usuarios activos.',
    tags: ['Angular', 'NestJS', 'PostgreSQL'],
  },
  {
    title: 'Pipeline de Mensajería Logística',
    description: 'Pipeline con Kafka, Azure Event Hubs y Service Bus procesando cientos de miles de eventos para Starken y Bluexpress, con optimización de rutas vía HERE API.',
    tags: ['Kafka', 'Azure', 'Laravel', 'HERE API'],
  },
  {
    title: 'Migración Cloud Huella Smart',
    description: 'Migración completa de arquitectura serverless (AppSync, DynamoDB) hacia infraestructura relacional en VPC EC2 con NestJS y PostgreSQL, preservando frontends existentes.',
    tags: ['NestJS', 'PostgreSQL', 'AWS EC2', 'Cognito'],
  },
]

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <Navbar name="Marco" subtitle="González" isDark={isDark} onToggleTheme={toggleTheme} />

      <main>
        <Hero
          name="Marco"
          nameAccent="González"
          role="Senior Full Stack Developer"
          tagline="6+ años diseñando y entregando soluciones de software en sectores automotriz, minería, logística y sustentabilidad. Arquitecturas de microservicios, integraciones empresariales y migraciones a producción."
          email="msgb.labor@gmail.com"
          linkedin="linkedin.com/in/msgb"
          github="github.com/MarkoDotCom"
          phone="(+56) 9 4092 0875"
          location="Santiago, Chile"
          stats={HERO_STATS}
        />

        <section id="about">
          <SectionHeader label="Perfil" title="Sobre" accent="mí" />
          <p className="about-text">
            Ingeniero de software full stack con más de 6 años entregando soluciones en consultoría tecnológica para sectores automotriz, minería, logística y sustentabilidad. Diseño e implemento arquitecturas de microservicios, lidero migraciones de sistemas legados y construyo integraciones con plataformas empresariales como Salesforce, Apigee y ArcGIS. Manejo pipelines de mensajería con Kafka y Azure, tomo decisiones de arquitectura con autonomía y coordino directamente con clientes en entornos ágiles.
          </p>
        </section>

        <section id="experience">
          <SectionHeader label="Trayectoria" title="Experiencia" accent="laboral" />
          {EXPERIENCE.map(item => <ExperienceItem key={item.title} {...item} />)}
        </section>

        <section id="skills">
          <SectionHeader label="Capacidades" title="Habilidades" accent="técnicas" />
          <div className="skills-container">
            {SKILLS.map(cat => (
              <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} icon={cat.icon} />
            ))}
          </div>
        </section>

        <section id="projects">
          <SectionHeader label="Portfolio" title="Proyectos" accent="destacados" />
          <div className="projects-grid">
            {PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}
          </div>
        </section>
      </main>

      <footer>
        <span>Marco Sebastián González Barraza · Santiago, Chile</span>
        <span>
          <a href="mailto:msgb.labor@gmail.com">msgb.labor@gmail.com</a>
          {' · '}
          <a href="https://linkedin.com/in/msgb" target="_blank" rel="noreferrer">LinkedIn</a>
        </span>
      </footer>
    </>
  )
}

export default App
