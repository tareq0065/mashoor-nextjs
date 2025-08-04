import { Locale } from '@/types/language';
import productsData from '@/mock-data/products.json';
import heroData from '@/mock-data/hero.json';
import contentData from '@/mock-data/content.json';
import seoData from '@/mock-data/seo.json';

export interface Product {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
  images: string[];
  category: Record<Locale, string>;
  features: Record<Locale, string>[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isFeatured: boolean;
}

export interface HeroData {
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  cta: {
    primary: {
      text: Record<Locale, string>;
      href: string;
    };
    secondary: {
      text: Record<Locale, string>;
      href: string;
    };
  };
  backgroundImage: string;
  videoUrl: string;
  features: Array<{
    icon: string;
    text: Record<Locale, string>;
  }>;
}

// simulating API calls
export async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return productsData.featured as Product[];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((product) => product.isFeatured);
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((product) => product.id === id) || null;
}

export async function getHeroData(): Promise<HeroData> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return heroData as HeroData;
}

export async function getContentData() {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return contentData;
}

export async function getSEOData(locale: Locale) {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return seoData.default[locale];
}

export async function getStructuredData() {
  return seoData.structuredData;
}

// Helper function to get localized text
export function getLocalizedText(
  text: Record<Locale, string> | string,
  locale: Locale,
): string {
  if (typeof text === 'string') return text;
  return text[locale] || text['en'] || '';
}
