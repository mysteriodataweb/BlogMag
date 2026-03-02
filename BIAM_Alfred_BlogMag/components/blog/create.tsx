"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ChevronDown } from "lucide-react"
import { categories } from "@/lib/mock-data"

interface FormData {
  titre: string
  sousTitre: string
  auteur: string
  contenu: string
  categorie: string
}

interface FormErrors {
  titre?: string
  auteur?: string
  contenu?: string
  categorie?: string
}

export default function CreerArticle() {
  const [formData, setFormData] = useState<FormData>({
    titre: "",
    sousTitre: "",
    auteur: "",
    contenu: "",
    categorie: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [showModal, setShowModal] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.titre.trim()) newErrors.titre = "Le titre est obligatoire"
    if (!formData.auteur.trim()) newErrors.auteur = "Le nom de l'auteur est obligatoire"
    if (!formData.contenu.trim()) newErrors.contenu = "Le contenu est obligatoire"
    if (!formData.categorie) newErrors.categorie = "Veuillez choisir une catégorie"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setShowModal(true)
      setFormData({ titre: "", sousTitre: "", auteur: "", contenu: "", categorie: "" })
      setErrors({})
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    setIsSaving(true)
    setTimeout(() => setIsSaving(false), 1000)
  }

  const hasErrors = Object.values(errors).some(Boolean)

  return (
    <div className="min-h-screen bg-white flex flex-col">

     
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour</span>
          </Link>
          <span className="text-gray-200">|</span>
          <span className="text-sm text-gray-400 italic">
            {isSaving ? "Enregistrement…" : "Brouillon enregistré"}
          </span>
        </div>

        <button
          onClick={handleSubmit as any}
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-1.5 rounded-full transition-colors"
        >
          Publier
        </button>
      </header>

 
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">

        {hasErrors && (
          <div className="mb-6 flex items-center gap-2 text-red-500 text-sm border border-red-100 bg-red-50 rounded-lg px-4 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Veuillez corriger les erreurs avant de publier.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col">

          <div className="relative mb-1">
            <input
              id="titre"
              type="text"
              name="titre"
              value={formData.titre}
              onChange={handleChange}
              placeholder="Titre"
              className={`w-full text-4xl font-bold text-gray-900 placeholder-gray-200 border-none outline-none resize-none bg-transparent leading-tight
                ${errors.titre ? "placeholder-red-300" : ""}`}
            />
            {errors.titre && (
              <p className="text-xs text-red-400 mt-1 ml-0.5">{errors.titre}</p>
            )}
          </div>

          
          <div className="mb-6">
            <input
              id="sousTitre"
              type="text"
              name="sousTitre"
              value={formData.sousTitre}
              onChange={handleChange}
              placeholder="Ajoutez un sous-titre…"
              className="w-full text-xl text-gray-400 placeholder-gray-300 border-none outline-none bg-transparent leading-relaxed"
            />
          </div>

         
          <div className="border-t border-gray-100 mb-6" />

         
          <div className="flex flex-col sm:flex-row gap-4 mb-6">

            {/* Auteur */}
            <div className="flex-1">
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                Auteur
              </label>
              <input
                id="auteur"
                type="text"
                name="auteur"
                value={formData.auteur}
                onChange={handleChange}
                placeholder="Votre nom complet"
                className={`w-full text-sm text-gray-700 placeholder-gray-300 border-b pb-2 outline-none bg-transparent transition-colors
                  ${errors.auteur ? "border-red-300" : "border-gray-200 focus:border-gray-500"}`}
              />
              {errors.auteur && (
                <p className="text-xs text-red-400 mt-1">{errors.auteur}</p>
              )}
            </div>

            {/* Catégorie */}
            <div className="flex-1">
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                Catégorie
              </label>
              <div className="relative">
                <select
                  id="categorie"
                  name="categorie"
                  value={formData.categorie}
                  onChange={handleChange}
                  className={`w-full appearance-none text-sm text-gray-700 border-b pb-2 outline-none bg-transparent pr-6 cursor-pointer transition-colors
                    ${errors.categorie ? "border-red-300 text-red-400" : "border-gray-200 focus:border-gray-500"}
                    ${!formData.categorie ? "text-gray-300" : ""}`}
                >
                  <option value="" disabled>Choisir une catégorie</option>
                  {categories.map((cat) => (
                    <option key={cat.nom} value={cat.nom}>{cat.nom}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
              </div>
              {errors.categorie && (
                <p className="text-xs text-red-400 mt-1">{errors.categorie}</p>
              )}
            </div>
          </div>

   
          <div className="border-t border-gray-100 mb-6" />

       
          <div>
            <textarea
              id="contenu"
              name="contenu"
              value={formData.contenu}
              onChange={handleChange}
              placeholder="Racontez votre histoire…"
              rows={18}
              className={`w-full text-lg text-gray-700 placeholder-gray-300 border-none outline-none resize-none bg-transparent leading-relaxed
                ${errors.contenu ? "placeholder-red-300" : ""}`}
            />
            {errors.contenu && (
              <p className="text-xs text-red-400 mt-1">{errors.contenu}</p>
            )}
          </div>

        </form>
      </main>

      {/* ── Success Modal ── */}
      <dialog className={`modal ${showModal ? "modal-open" : ""}`}>
        <div className="modal-box bg-white text-center rounded-2xl shadow-xl">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h3 className="font-bold text-xl text-gray-900 mb-2">Article publié !</h3>
          <p className="text-gray-500 text-sm mb-6">
            Votre article est désormais visible par tous les lecteurs.
          </p>
          <div className="modal-action justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-8 py-2 rounded-full transition-colors border-none"
              onClick={() => setShowModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setShowModal(false)}>close</button>
        </form>
      </dialog>
    </div>
  )
}