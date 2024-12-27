import Analytics from '@/components/Analytics'

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