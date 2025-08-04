import { Locale } from '@/types/language';
import { getHeroData, getFeaturedProducts, getLocalizedText } from '@/lib/data';
import ProductsSection from '@/components/organisms/ProductsSection';
import FeaturesSection from '@/components/organisms/FeaturesSection';
import { features } from '@/lib/featuresData';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher';
import { ThemeSwitch } from '@/components/molecules/ThemeSwitch';

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tr' }];
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const heroData = await getHeroData();
  const featuredProducts = await getFeaturedProducts();

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end items-center mb-8 gap-2">
          <LanguageSwitcher currentLang={lang} />
          <ThemeSwitch />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {getLocalizedText(heroData.title, lang)}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {getLocalizedText(heroData.subtitle, lang)}
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              {getLocalizedText(heroData.cta.primary.text, lang)}
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              {getLocalizedText(heroData.cta.secondary.text, lang)}
            </button>
          </div>
        </div>

        {/* Featured Products Preview */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {lang === 'tr' ? 'Öne Çıkan Ürünler' : 'Featured Products'}
          </h2>
          <ProductsSection products={featuredProducts} lang={lang} />
        </div>

        <FeaturesSection
          features={features}
          lang={lang}
          title={lang === 'tr' ? 'Size Sözümüz' : 'Our Promise to You'}
        />
      </div>
    </main>
  );
}
