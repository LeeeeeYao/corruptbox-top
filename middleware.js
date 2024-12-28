import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en', 'es', 'hi', 'tl', 'ja', 'ko']
let defaultLocale = 'en'

function getLocale(request) {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  const languages = new Negotiator({ headers: { 'accept-language': acceptLanguage } }).languages()
  
  try {
    return match(languages, locales, defaultLocale)
  } catch (error) {
    return defaultLocale
  }
}

export function middleware(request) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}