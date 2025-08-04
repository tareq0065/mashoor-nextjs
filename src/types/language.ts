export type Locale = 'en' | 'tr';

export interface TranslationKeys {
  common: {
    loading: string;
    error: string;
    retry: string;
  };
  navigation: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
}
