'use client';

import { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Plane className="w-8 h-8 text-gold-400" />
            <span className="text-2xl font-bold text-white">Premier<span className="text-gold-400">Fly</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-gold-400 transition">Главная</Link>
            <Link href="/search" className="text-gray-300 hover:text-gold-400 transition">Поиск</Link>
            <Link href="/about" className="text-gray-300 hover:text-gold-400 transition">О нас</Link>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-300">Главная</Link>
            <Link href="/search" className="block py-2 text-gray-300">Поиск</Link>
            <Link href="/about" className="block py-2 text-gray-300">О нас</Link>
          </div>
        )}
      </div>
    </header>
  );
}
