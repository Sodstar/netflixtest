import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-black fixed w-full top-0 z-10">
    <a href="/">
      <img src="/logo.png" className="w-36" />
    </a>
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-800">Нүүр хуудас</Link>
        </li>
        <li>
          <Link href="/"  className="hover:text-gray-800">Кино сан</Link>
        </li>
        <li>
          <Link href="/"  className="hover:text-gray-800">ТВ шоу</Link>
        </li>
        <li>
          <Link href="/"  className="hover:text-gray-800">Миний жагсаалт</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header