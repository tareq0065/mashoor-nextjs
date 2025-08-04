import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SUPPORTED_LOCALES } from '@/lib/constants';
import { Locale } from '@/types/language';
import { getSEOData, getStructuredData } from '@/lib/data';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>; // Changed: params is now a Promise
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>; // Changed: params is now a Promise
}): Promise<Metadata> {
  const { lang } = await params;

  // Get SEO data from mock CMS
  const seoData = await getSEOData(lang);
  const structuredData = await getStructuredData();

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        tr: '/tr',
      },
    },
    openGraph: {
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      url: seoData.openGraph.url,
      siteName: 'Mashoor',
      images: [
        {
          url: seoData.openGraph.image,
          width: 1200,
          height: 630,
          alt: seoData.openGraph.title,
        },
      ],
      locale: lang === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.twitter.title,
      description: seoData.twitter.description,
      images: [seoData.twitter.image],
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}

export default async function LanguageLayout({
  children,
  params,
}: LayoutProps) {
  // Changed: Made function async and await params
  const { lang } = await params;

  // Validate the language parameter
  if (!SUPPORTED_LOCALES.includes(lang)) {
    notFound();
  }

  return children;
}

// Generate static paths for supported locales
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({
    lang,
  }));
}
