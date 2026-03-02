"use client"

interface CategoryBadgeProps {
  categorie: string
  className?: string
}

const categoryColors: Record<string, string> = {
  Technologie: "badge-info",
  Design: "badge-secondary",
  Lifestyle: "badge-accent",
  Voyage: "badge-primary",
  Cuisine: "badge-warning",
  Business: "badge-neutral",
  "Santé": "badge-success",
}

export function CategoryBadge({ categorie, className = "" }: CategoryBadgeProps) {
  return (
    <span className={`badge badge-sm ${categoryColors[categorie] || "badge-ghost"} ${className}`}>
      {categorie}
    </span>
  )
}
