import ClientPage from '@/components/ClientPage'
import { getDictionary } from '@/lib/dictionary'

export default async function Page({ params }) {
  const { lang } = params
  const dict = await getDictionary(lang)

  console.log('Current language:', lang)
  console.log('Dictionary loaded:', dict ? 'yes' : 'no')

  return <ClientPage lang={lang} dict={dict} />
}
  
