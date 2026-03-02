"use client"

import { useState, useEffect } from "react"
import { articles as mockArticles, type Article } from "@/lib/mock-data"
import { HeroSection } from "@/components/blog/hero-section"
import { ArticleCard } from "@/components/blog/article-card"
import { Sidebar } from "@/components/blog/sidebar"
import { BannerCards } from "@/components/blog/banner-cards"
import { PopularSection } from "@/components/blog/popular-section"

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(mockArticles)
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.categorie === selectedCategory)
    : articles

  const mainArticles = selectedCategory ? filteredArticles : filteredArticles.slice(0, 6)

  return (
    <div className="min-h-screen bg-white">
    
      <main>
        <HeroSection />

        {/* Main content: Articles Grid + Sidebar */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main column */}
            <div className="w-full lg:w-[70%]">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="card bg-base-100 shadow-sm border border-gray-100 animate-pulse">
                      <div className="h-52 bg-gray-200 rounded-t-2xl" />
                      <div className="card-body p-4 gap-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                        <div className="h-3 bg-gray-200 rounded w-1/2" />
                        <div className="flex gap-2 mt-2">
                          <div className="h-3 bg-gray-200 rounded w-20" />
                          <div className="h-3 bg-gray-200 rounded w-16" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {selectedCategory ? `Categorie: ${selectedCategory}` : "Derniers articles"}
                    </h2>
                    {selectedCategory && (
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(null)}
                        className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                      >
                        Voir tout
                      </button>
                    )}
                  </div>

                  {mainArticles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {mainArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">Aucun article dans cette categorie.</p>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[30%]">
              {!loading && (
                <Sidebar
                  articles={articles}
                  onCategorySelect={setSelectedCategory}
                />
              )}
            </div>
          </div>
        </section>

        <BannerCards />
        <PopularSection articles={filteredArticles} />
      </main>

    </div>
  )
}
