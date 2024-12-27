import LanguageSwitcher from '@/components/LanguageSwitcher'
import GameContainer from '@/components/GameContainer'
import Link from 'next/link'
import ClientPage from '@/components/ClientPage'
import { getDictionary } from '@/lib/dictionary'

export default async function Page({ params }) {
  const { lang } = params
  const dict = await getDictionary(lang)

  return <ClientPage lang={lang} dict={dict} />
}
  
