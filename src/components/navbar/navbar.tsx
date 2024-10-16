"use client"

import { useState } from "react"
import Link from "next/link"
import { CodeXml, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
                <CodeXml className="h-8 w-8 text-primary" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-primary-foreground hover:bg-primary hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className={`text-primary-foreground hover:bg-primary hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium ${path === '/about' ? 'text-[#3B82F6]' : ''}`}>About</Link>
                <Link href="/projects" className={`text-primary-foreground hover:bg-primary hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium ${path === '/projects' ? 'text-[#3B82F6]' : ''}`}>Projects</Link>
                <Link href="/contact" className={`text-primary-foreground hover:bg-primary hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium ${path === '/contact' ? 'text-[#3B82F6]' : ''}`}>Contact</Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 hover:h-7 w-7 hover:text-black" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 hover:h-7 w-7 hover:text-black" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-primary-foreground hover:bg-primary hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className={`text-primary-foreground hover:bg-primary hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium ${path === '/about' ? 'text-[#3B82F6]' : ''}`}>About</Link>
            <Link href="/projects" className={`text-primary-foreground hover:bg-primary hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium ${path === '/projects' ? 'text-[#3B82F6]' : ''}`}>Projects</Link>
            <Link href="/contact" className={`text-primary-foreground hover:bg-primary hover:text-[#3B82F6] block px-3 py-2 rounded-md text-base font-medium ${path === '/contact' ? 'text-[#3B82F6]' : ''}`}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}