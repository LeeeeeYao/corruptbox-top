import { getDictionary } from '@/lib/dictionary'
import Analytics from '@/components/Analytics'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    alternates: {
      languages: {
        'en': '/en',
        'hi': '/hi',
        'tl': '/tl',
        'es': '/es'
      }
    }
  }
}

export default async function Layout({ children, params }) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}