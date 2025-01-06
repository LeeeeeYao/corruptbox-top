import Analytics from '@/components/Analytics'

export async function generateMetadata() {
  const baseUrl = 'https://corruptbox.top';
  
  return {
    title: 'Privacy Policy - Corruptbox',
    description: 'Privacy Policy for Corruptbox - Online Music Creation Platform',
    alternates: {
      canonical: `${baseUrl}/privacy-policy`,
    },
    openGraph: {
      title: 'Privacy Policy - Corruptbox',
      description: 'Privacy Policy for Corruptbox - Online Music Creation Platform',
      url: `${baseUrl}/privacy-policy`,
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
          href="https://corruptbox.top/privacy-policy"
        />
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
} 