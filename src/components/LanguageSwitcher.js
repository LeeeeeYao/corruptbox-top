'use client'

import { useRouter } from 'next/navigation'

export default function LanguageSwitcher({ lang }) {
  const router = useRouter()
  
  const languages = {
    en: 'English',
    es: 'Español',
    tl: 'Tagalog',
    
    hi: 'हिन्दी'
  }
  
  return (
    <div className="absolute top-4 right-4 z-10 flex items-center">
      <div className="relative inline-block">
        <select
          value={lang}
          onChange={(e) => router.push(`/${e.target.value}`)}
          className="appearance-none bg-gray-800 text-green-400 border border-green-500 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors cursor-pointer"
        >
          {Object.entries(languages).map(([code, name]) => (
            <option key={code} value={code} className="bg-gray-800">
              {name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
