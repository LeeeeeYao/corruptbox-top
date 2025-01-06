import Analytics from '@/components/Analytics'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({ params }) {
  const { lang } = params;
  const dict = await getDictionary(lang);
  const baseUrl = 'https://corruptbox.top';
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'en': `${baseUrl}/en`,
        'es': `${baseUrl}/es`,
        'hi': `${baseUrl}/hi`,
        'tl': `${baseUrl}/tl`,
        'ja': `${baseUrl}/ja`,
        'ko': `${baseUrl}/ko`
      }
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `${baseUrl}/${lang}`,
      siteName: 'Corruptbox',
      locale: lang,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function Layout({ children, params }) {
  const { lang } = params;
  const canonicalUrl = `https://corruptbox.top/${lang}`;
  
  return (
    <html lang={lang}>
      <head>
        <link 
          rel="canonical" 
          href={canonicalUrl}
        />
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}