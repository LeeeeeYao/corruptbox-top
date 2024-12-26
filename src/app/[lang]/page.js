import { getDictionary } from '@/lib/dictionary'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import GameContainer from '@/components/GameContainer'

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

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <LanguageSwitcher lang={lang} />
      
      {/* Hero Section */}
      <header className="relative flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800" style={{ paddingTop: '20px' }}>
        <div className="text-center px-4">
          <h1 className="text-7xl font-bold text-green-400 mb-6 glitch-text">
            {dict.home.title}
          </h1>
          <h2 className="text-3xl text-green-300 mb-8">
            {dict.home.subtitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {dict.home.mainDescription}
          </p>
          <GameContainer dict={dict} />
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* How to Play Section */}
        <section className="bg-gray-800/50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-green-400 mb-8 text-center">
            {dict.home.gameplay.title}
          </h2>
          <ul className="space-y-4 text-lg text-gray-300">
            {dict.home.gameplay.steps.items.map((item, index) => (
              <li key={index}>
                <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
              </li>
            ))}
          </ul>
        </section>

        {/* Introduction */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-400 mb-8">
            {dict.home.introduction.title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {dict.home.introduction.content}
          </p>
        </section>

        {/* Features Grid */}
        <section className="bg-gray-800/50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
            {dict.home.features.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dict.home.features.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                <span className="text-green-400 text-2xl">♪</span>
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-400 mb-8">
            {dict.home.community.title}
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            {dict.home.community.content}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {dict.home.community.features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Updates Section */}
        <section className="bg-green-500 text-gray-900 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">{dict.updates.title}</h2>
          <p className="text-xl max-w-3xl mx-auto">
            {dict.updates.content}
          </p>
        </section>
      </main>

      <footer className="mt-24 py-8 bg-gray-800 text-gray-300 relative">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">{dict.footer}</p>
        </div>
        <div className="absolute bottom-0 right-4 flex items-center h-full text-sm space-x-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}
  
