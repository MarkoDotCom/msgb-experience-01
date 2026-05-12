import { useRef } from 'react'
import { Tag } from './Tag'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  tags: string[]
}

export function ExperienceItem({ title, company, period, description, tags }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  useAnimateOnScroll(ref)

  return (
    <div className="experience-item" ref={ref}>
      <div className="experience-header">
        <h3 className="experience-title">{title}</h3>
        <span className="experience-period">{period}</span>
      </div>
      <p className="experience-company">{company}</p>
      <p className="experience-description">{description}</p>
      <div className="tech-stack">
        {tags.map(tag => <Tag key={tag} label={tag} />)}
      </div>
    </div>
  )
}
