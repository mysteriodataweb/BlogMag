"use client"

import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Bookmark, MoreHorizontal } from "lucide-react"
import type { Article } from "@/lib/mock-data"

interface ArticleCardProps {
  article: Article
  reason?: string 
}

export function ArticleCard({ article, reason }: ArticleCardProps) {
  return (
    <div className="py-6 border-b border-gray-100 group">
     
      {reason && (
        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
          <span className="inline-block w-3 h-3 border border-gray-400 rounded-sm" />
          {reason}
        </p>
      )}

      
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={article.auteurAvatar}
            alt={article.auteur}
            width={20}
            height={20}
            className="object-cover w-full h-full"
          />
        </div>
        <span className="text-xs font-medium text-gray-700">
          in
          <span className="font-semibold text-gray-900">
            {article.categorie}
          </span>
          by {article.auteur}
        </span>
      </div>


      <Link href={`/article/${article.id}`} className="flex gap-8 items-start">

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900 leading-snug mb-1 group-hover:text-gray-600 transition-colors line-clamp-2">
            {article.titre}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed hidden sm:block">
            {article.description}
          </p>
        </div>

     
        <div className="w-28 h-20 flex-shrink-0 overflow-hidden rounded-sm bg-gray-100">
          <Image
            src={article.image}
            alt={article.titre}
            width={112}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

  
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3 text-xs text-gray-500">
   
          <span>{article.date}</span>

  
          <span className="flex items-center gap-1">
            👏 <span>{(article.note * 1000).toFixed(0)}</span>
          </span>

      
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{article.tempsLecture * 10}</span>
          </span>
        </div>

    
        <div className="flex items-center gap-2 text-gray-400">
          <button
            className="hover:text-gray-700 transition-colors p-1 rounded"
            aria-label="Save"
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            className="hover:text-gray-700 transition-colors p-1 rounded"
            aria-label="More"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}