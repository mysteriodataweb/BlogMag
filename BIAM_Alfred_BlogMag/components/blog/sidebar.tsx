"use client"

import Image from "next/image"
import Link from "next/link"
import { categories, type Article } from "@/lib/mock-data"

interface SidebarProps {
  articles: Article[]
  onCategorySelect: (category: string) => void
}

export function Sidebar({ articles, onCategorySelect }: SidebarProps) {
  const populaires = [...articles].sort((a, b) => b.partages - a.partages).slice(0, 4)

  return (
    <aside className="flex flex-col gap-6">
      {/* Categories Card */}
      <div className="card bg-white border border-gray-100 shadow-sm">
        <div className="card-body p-5">
          <h3 className="card-title text-base font-bold text-gray-900 mb-3 font-heading font-body">
            Catégories
          </h3>
          <ul className="flex flex-col gap-2.5">
            {categories.map((cat) => (
              <li key={cat.nom}>
                <button
                  type="button"
                  onClick={() => onCategorySelect(cat.nom)}
                  className="w-full flex items-center justify-between group text-left"
                >
                  <span className="badge badge-ghost text-gray-700 group-hover:text-orange-500 transition-colors">
                    {cat.nom}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    ({cat.count})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Popular Articles Mini-List */}
      <div className="card bg-white border border-gray-100 shadow-sm">
        <div className="card-body p-5">
          <h3 className="card-title text-base font-bold text-gray-900 mb-3 font-heading font-body">
            Articles Populaires
          </h3>
          <ul className="flex flex-col gap-4">
            {populaires.map((article) => (
              <li key={article.id}>
                <Link
                  href={`/article/${article.id}`}
                  className="flex items-center gap-3 group"
                >
                  <Image
                    src={article.image}
                    alt={article.titre}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {article.titre}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
