'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SUPPORTED_LOCALES, LOCALE_LABELS } from '@/lib/constants';
import { Locale } from '@/types/language';

interface LanguageSwitcherProps {
  currentLang: Locale;
}

export default function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getLocalizedPath = (locale: Locale) => {
    // Remove current language from pathname and add new one
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
    return `/${locale}${pathWithoutLang}`;
  };

  return (
    <div className="flex gap-2">
      {SUPPORTED_LOCALES.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            currentLang === locale
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {LOCALE_LABELS[locale]}
        </Link>
      ))}
    </div>
  );
}
