"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Article } from "@/lib/mock-data"
import { ArticleCard } from "./article-card"

interface PopularSectionProps {
  articles: Article[]
}

type Tab = "recents" | "mieux-notes" | "plus-partages"

export function PopularSection({ articles }: PopularSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>("recents")

  const sortedArticles = (() => {
    switch (activeTab) {
      case "mieux-notes":
        return [...articles].sort((a, b) => b.note - a.note)
      case "plus-partages":
        return [...articles].sort((a, b) => b.partages - a.partages)
      default:
        return [...articles]
    }
  })()

  const tabs: { id: Tab; label: string }[] = [
    { id: "recents", label: "Récents" },
    { id: "mieux-notes", label: "Mieux notés" },
    { id: "plus-partages", label: "Plus partagés" },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Articles Populaires</h2>
        <Link
          href="/"
          className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          Tous les articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

     
      <div role="tablist" className="tabs tabs-bordered mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            className={`tab text-sm font-medium ${
              activeTab === tab.id
                ? "tab-active !border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {sortedArticles.slice(0, 4).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
