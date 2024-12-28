import Analytics from '@/components/Analytics'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({ params }) {
  const { lang } = params;
  const dict = await getDictionary(lang);
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    alternates: {
      languages: {
        'en': '/en',
        'es': '/es',
        'hi': '/hi',
        'tl': '/tl',
        'ja': '/ja',
        'ko': '/ko'
      }
    }
  }
}

export default async function Layout({ children, params }) {
  const { lang } = params;
  return (
    <html lang={lang}>
      <head>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}