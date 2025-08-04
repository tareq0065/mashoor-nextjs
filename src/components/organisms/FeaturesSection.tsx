'use client';

import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Headphones, BadgeCheck } from 'lucide-react';

// Define valid icon names as a union type
export type FeatureIconName =
  | 'Globe'
  | 'ShieldCheck'
  | 'Headphones'
  | 'BadgeCheck';

// Map icon name strings to Lucide icon components
const iconMap = {
  Globe,
  ShieldCheck,
  Headphones,
  BadgeCheck,
};

export interface FeatureItem {
  icon: FeatureIconName;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
}

interface FeaturesSectionProps {
  features: FeatureItem[];
  lang: 'en' | 'tr';
  title?: string;
}

export default function FeaturesSection({
  features,
  lang,
  title,
}: FeaturesSectionProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon] || Globe;
          return (
            <motion.div
              key={feature.title.en}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.14 }}
              viewport={{ once: true, amount: 0.6 }}
              className="bg-white dark:bg-zinc-900 shadow-md dark:shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
            >
              <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {feature.title[lang]}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                {feature.description[lang]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
