"use client"

import { use, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Star, Share2 } from "lucide-react"
import { articles as mockArticles, commentaires, type Article } from "@/lib/mock-data"
import { CategoryBadge } from "@/components/blog/category-badge"
import { CommentItem } from "@/components/blog/comment-item" 
import ArticleDetail from "@/components/blog/article"

export default function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = mockArticles.find((a) => a.id === parseInt(id))
      setArticle(found || null)
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-80 bg-gray-200 rounded-2xl mb-8" />
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
            <div className="flex flex-col gap-3">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white">

        <main className="max-w-4xl mx-auto px-4 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non troué</h1>
          <p className="text-gray-600 mb-6">{"L\u2019article que vous recherchez n\u2019existe pas."}</p>
          <Link href="/" className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
            {"Retour à l'accueil"}
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">

      <main>
        {/* Cover Image */}
        <div className="relative w-full h-72 md:h-96 lg:h-[28rem]">
          <Image
            src={article.image}
            alt={article.titre}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 lg:px-8 -mt-24 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-500 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux articles
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <CategoryBadge categorie={article.categorie} className="badge-md" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-balance mb-6">
              {article.titre}
            </h1>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-11 rounded-full ring-2 ring-orange-100">
                    <Image
                      src={article.auteurAvatar}
                      alt={article.auteur}
                      width={44}
                      height={44}
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{article.auteur}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1 text-orange-500">
                      <Clock className="w-3.5 h-3.5" />
                      {article.tempsLecture} min de lecture
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(article.note)
                          ? "fill-orange-500 text-orange-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">{article.note}</span>
                </div>
                <button className="btn btn-ghost btn-sm gap-1 text-gray-500" aria-label="Partager">
                  <Share2 className="w-4 h-4" />
                  {article.partages}
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-gray max-w-none mt-8">
              {article.contenu.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <section className="mt-10 mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Commentaires ({commentaires.length})
            </h2>
            <div className="flex flex-col gap-4">
              {commentaires.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
