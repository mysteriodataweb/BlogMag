"use client"

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const slides = [
    { id: 1, src: "/images/télécharger.jpg", alt: "Collection du Printemps" },
    { id: 2, src: "/images/Book Mockup.jpg", alt: "Collection du Printemps" },
    { id: 3, src: "/images/Amanda Jane Jones.jpg", alt: "Collection du Printemps" },
    { id: 4, src: "/images/Blackazine Indesign Template.jpg", alt: "Collection du Printemps" },
]

// Clone du 1er slide ajouté à la fin → illusion de carrousel infini
const extendedSlides = [...slides, slides[0]]

const CarouselHero = () => {
    const [current, setCurrent] = useState(0)
    const [animated, setAnimated] = useState(true)
    const isTransitioning = useRef(false)

    const goTo = (index: number) => {
        if (isTransitioning.current) return
        isTransitioning.current = true
        setAnimated(true)
        setCurrent(index)
    }

    const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1)
    const next = () => goTo(current + 1) // peut aller jusqu'à slides.length (le clone)

    // Auto-scroll toutes les 2 secondes
    useEffect(() => {
        const timer = setInterval(() => next(), 2000)
        return () => clearInterval(timer)
    }, [current])

    // Quand on arrive sur le clone → saut instantané vers le vrai slide 0
    const handleTransitionEnd = () => {
        isTransitioning.current = false
        if (current === slides.length) {
            setAnimated(false)  // désactive la transition CSS
            setCurrent(0)       // repositionne sans animation
        }
    }

    // Ré-active l'animation après le saut instantané (double RAF nécessaire)
    useEffect(() => {
        if (!animated) {
            const raf = requestAnimationFrame(() => {
                requestAnimationFrame(() => setAnimated(true))
            })
            return () => cancelAnimationFrame(raf)
        }
    }, [animated])

    // Le clone (index slides.length) correspond visuellement au slide 0
    const dotIndex = current === slides.length ? 0 : current

    return (
        <div className="relative w-full overflow-hidden">

            {/* Track */}
            <div
                className={animated ? "flex transition-transform duration-700 ease-in-out" : "flex"}
                style={{ transform: `translateX(-${current * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendedSlides.map((slide, i) => (
                    <div key={i} className="min-w-full">
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={1200}
                            height={480}
                            className="w-full h-72 lg:h-96 object-cover"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Flèches */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between pointer-events-none">
                <button onClick={prev} className="btn btn-circle pointer-events-auto">❮</button>
                <button onClick={next} className="btn btn-circle pointer-events-auto">❯</button>
            </div>

            {/* Points indicateurs */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === dotIndex ? "bg-white scale-125" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>

        </div>
    )
}

export default CarouselHero