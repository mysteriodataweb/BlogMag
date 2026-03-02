"use client"

import Image from "next/image"
import type { Comment } from "@/lib/mock-data"

interface CommentItemProps {
  comment: Comment
}

export function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="card bg-gray-50 border border-gray-100">
      <div className="card-body p-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <Image
                src={comment.avatar}
                alt={comment.auteur}
                width={40}
                height={40}
              />
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-900">{comment.auteur}</p>
            <p className="text-xs text-gray-500">{comment.date}</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{comment.texte}</p>
      </div>
    </div>
  )
}
