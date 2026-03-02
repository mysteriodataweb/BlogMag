"use client"

import Image from "next/image"
import Link from "next/link"
import CarouselHero from '@/components/ui/carouselHero'
export function HeroSection() {
  return (
    <section className="hero bg-white py-8 lg:py-16">
      <div className="hero-content flex-col lg:flex-row max-w-7xl mx-auto px-4 lg:px-8 gap-8 lg:gap-16">
        <div className="flex-1 text-left">
          <span className="badge badge-outline border-orange-500 text-orange-500 text-xs font-medium mb-4">
            Nouveaux Articles
          </span>
          <h1
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance font-body"
        
          >
            La Collection du Printemps
          </h1>
          <p className="py-4 text-gray-600 leading-relaxed max-w-lg text-pretty">
            {"Découvrez nos articles soigneusement sélectionnés sur les dernières tendances en technologie, design, lifestyle et bien plus encore."}
          </p>
          <Link href="/article/1" className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-lg px-6">
            {"Lire la suite \u2192"}
          </Link>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -z-10 w-64 h-64 bg-emerald-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <CarouselHero />

          </div>
        </div>
      </div>
    </section>
  )
}
