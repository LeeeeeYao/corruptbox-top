'use client'

import { useRouter } from 'next/navigation'

export default function LanguageSwitcher({ lang }) {
  const router = useRouter()
  
  return (
    <div className="absolute top-4 right-4 z-10">
    <select
      value={lang}
      onChange={(e) => router.push(`/${e.target.value}`)}
      className="bg-gray-800 text-green-400 border border-green-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="tl">Tagalog</option>
      <option value="hi">हिन्दी</option>

    </select>
  </div>
  )
}
