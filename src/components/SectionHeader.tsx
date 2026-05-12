interface SectionHeaderProps {
  title: string
  accent?: string
  label?: string
}

export function SectionHeader({ title, accent, label }: SectionHeaderProps) {
  return (
    <div>
      {label && <span className="section-tag">{label}</span>}
      <h2 className="section-title">
        {title}{accent && <> <em>{accent}</em></>}
      </h2>
    </div>
  )
}
