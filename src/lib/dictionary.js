import 'server-only'

const dictionaries = {
  en: () => import('@/locales/en.json').then(module => module.default),
  es: () => import('@/locales/es.json').then(module => module.default),
  tl: () => import('@/locales/tl.json').then(module => module.default),
  hi: () => import('@/locales/hi.json').then(module => module.default)
}

export async function getDictionary(locale) {
  return dictionaries[locale]()
}
