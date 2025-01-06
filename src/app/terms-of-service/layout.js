import Analytics from '@/components/Analytics'

export async function generateMetadata() {
  const baseUrl = 'https://corruptbox.top';
  
  return {
    title: 'Terms of Service - Corruptbox',
    description: 'Terms of Service for Corruptbox - Online Music Creation Platform',
    alternates: {
      canonical: `${baseUrl}/terms-of-service`,
    },
    openGraph: {
      title: 'Terms of Service - Corruptbox',
      description: 'Terms of Service for Corruptbox - Online Music Creation Platform',
      url: `${baseUrl}/terms-of-service`,
      siteName: 'Corruptbox',
      type: 'website',
    },
  }
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="canonical" 
          href="https://corruptbox.top/terms-of-service"
        />
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
} 