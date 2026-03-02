import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-white">
              Blog<span className="text-orange-500">Mag</span>
            </h3>
            <p className="text-sm mt-2 max-w-xs leading-relaxed">
              Votre destination pour des articles de qualit\u00e9 sur la technologie, le design, le lifestyle et plus encore.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold text-white text-sm mb-3">Navigation</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Accueil</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Blog</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Catégories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-3">Légal</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Mentions légales</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Confidentialit\u00e9</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">CGU</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          &copy; 2026 BlogMag. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
