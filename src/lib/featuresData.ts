import { FeatureIconName } from '@/components/organisms/FeaturesSection';

export interface FeatureItem {
  icon: FeatureIconName;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
}

export const features: FeatureItem[] = [
  {
    icon: 'Globe',
    title: { en: 'Worldwide Shipping', tr: 'Dünya Çapında Teslimat' },
    description: {
      en: 'Shop from anywhere—fast and secure global delivery to your doorstep.',
      tr: 'Nerede olursanız olun, hızlı ve güvenli teslimat kapınızda!',
    },
  },
  {
    icon: 'ShieldCheck',
    title: { en: 'Safe & Secure Payment', tr: 'Güvenli Ödeme' },
    description: {
      en: 'Your purchases are protected with encrypted payments and buyer security.',
      tr: 'Şifreli ödemeler ve alıcı koruması ile alışverişleriniz güvende.',
    },
  },
  {
    icon: 'Headphones',
    title: { en: '24/7 Customer Support', tr: '7/24 Müşteri Desteği' },
    description: {
      en: 'Our expert team is always here for your questions, day or night.',
      tr: 'Uzman ekibimiz gece gündüz sorularınız için her zaman burada.',
    },
  },
  {
    icon: 'BadgeCheck',
    title: { en: 'Quality Guarantee', tr: 'Kalite Garantisi' },
    description: {
      en: 'We stand behind every product with a satisfaction and warranty promise.',
      tr: 'Her ürünümüz memnuniyet ve garanti sözüyle desteklenir.',
    },
  },
];
