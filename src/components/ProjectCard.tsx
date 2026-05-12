import { useRef } from 'react'
import { Tag } from './Tag'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  useAnimateOnScroll(ref)

  return (
    <div className="project-card" ref={ref}>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tech">
        {tags.map(tag => <Tag key={tag} label={tag} />)}
      </div>
    </div>
  )
}
