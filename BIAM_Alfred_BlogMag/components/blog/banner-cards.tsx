"use client"

import Image from "next/image"
import Link from "next/link"

export function BannerCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend Banner */}
        <Link href="/" className="group">
          <div className="card image-full shadow-md h-52 overflow-hidden">
            <figure>
              <Image
                src="/images/banner-frontend.jpg"
                alt="D\u00e9veloppement Frontend"
                width={600}
                height={260}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <div className="card-body justify-end">
              <h3 className="card-title text-white text-xl font-bold">
                Developpement Frontend
              </h3>
              <p className="text-gray-200 text-sm">
                {"Les derni\u00e8res techniques et frameworks pour le web moderne"}
              </p>
              <div className="card-actions mt-2">
                <span className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white border-none">
                  {"Explorer Frontend"}
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* UI/UX Banner */}
        <Link href="/" className="group">
          <div className="card image-full shadow-md h-52 overflow-hidden">
            <figure>
              <Image
                src="/images/banner-uiux.jpg"
                alt="Design UI/UX"
                width={600}
                height={260}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <div className="card-body justify-end">
              <h3 className="card-title text-white text-xl font-bold">
                Design UI/UX
              </h3>
              <p className="text-gray-200 text-sm">
                {"Cr\u00e9ez des interfaces belles et intuitives"}
              </p>
              <div className="card-actions mt-2">
                <span className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white border-none">
                  {"Explorer UI/UX"}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
