"use client"

import Link from "next/link"
import { Search, User, Menu, SquarePen, House } from "lucide-react"

export function Navbar() {
  return (
    <div className="navbar bg-white border-b border-gray-100 sticky top-0 z-50 px-4 lg:px-8">
      {/* Mobile menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-gray-100"
          >
            <li><Link href="/" className="text-gray-700 hover:text-orange-500"><House className="w-4 h-4 text-gray-600 mr-2 inline" />Accueil</Link></li>
            {/* <li><Link href="/" className="text-gray-700 hover:text-orange-500">Blog</Link></li>
            <li><Link href="/" className="text-gray-700 hover:text-orange-500">Catégories</Link></li> */}
            <li><Link href="/creer" className="text-gray-700 hover:text-orange-500">Ecrire</Link></li>
          </ul>
        </div>

        <h1
          className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance font-body"
          style={{ fontFamily: 'var(--font-orbitron), var(--font-lora), serif' }}
        ><Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
            Blog<span className="text-orange-500">Mag</span>
          </Link>
        </h1>
      </div>

      {/* Desktop nav links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-30 px-1">
          <li><Link href="/" className="text-gray-700 hover:text-orange-500 font-medium text-sm"><House className="w-4 h-4 text-gray-600 mr-2 inline" />Accueil</Link></li>
          {/* <li><Link href="/" className="text-gray-700 hover:text-orange-500 font-medium text-sm">Blog</Link></li>
          <li><Link href="/" className="text-gray-700 hover:text-orange-500 font-medium text-sm">Catégories</Link></li> */}
          <li><Link href="/creer" className="text-gray-700 hover:text-orange-500 font-medium text-sm"><SquarePen className="w-4 h-4 text-gray-600" />Create</Link></li>
        </ul>
      </div>

      {/* Search + Icons */}
      <div className="navbar-end gap-2">
        <div className="form-control hidden md:flex">
          <label className="input input-bordered input-sm flex items-center gap-2 bg-gray-50 border-gray-200 focus-within:border-orange-500 focus-within:outline-none w-56">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              className="grow text-sm bg-transparent"
              placeholder="Rechercher..."
              aria-label="Rechercher"
            />
          </label>
        </div>
        <button className="btn btn-ghost btn-sm btn-circle" aria-label="Connexion">
          <User className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  )
}


