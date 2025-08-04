import { Locale } from '@/types/language';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'tr'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS = {
  en: 'En',
  tr: 'Tr',
} as const;
