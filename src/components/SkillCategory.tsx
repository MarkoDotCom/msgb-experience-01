import { useEffect, useRef, type ReactNode } from 'react'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'

interface Skill { name: string; percentage: number }

interface SkillCategoryProps {
  title: string
  skills: Skill[]
  icon?: ReactNode
}

export function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useAnimateOnScroll(containerRef)

  useEffect(() => {
    const fills = containerRef.current?.querySelectorAll<HTMLElement>('.skill-fill')
    if (!fills) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).classList.add('animate')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.5 }
    )
    fills.forEach(fill => observer.observe(fill))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-category" ref={containerRef}>
      <h3 className="skill-category-title">
        {icon && <span style={{ verticalAlign: 'middle', opacity: 0.7 }}>{icon}</span>}
        {title}
      </h3>
      {skills.map(skill => (
        <div key={skill.name} className="skill-item">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ '--fill-width': `${skill.percentage}%` } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
