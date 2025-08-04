'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import products from '@/mock-data/products.json'; // Must be a JS array/object, not fetch/async
import FavoriteButton from '@/components/atoms/FavoriteButton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductDetailsPage() {
  const { lang, id } = useParams();
  // products must be in memory, not fetched! Otherwise use SWR or fetch here.
  const product = products.featured.find((p) => p.id === id);

  if (!product) return notFound();

  const t = (obj: Record<string, string>) => obj[lang as string] || obj['en'];

  return (
    <main className="relative bg-background min-h-screen pb-32 md:pb-0">
      {/* Top Back Link */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'tr' ? 'Tüm Ürünler' : 'All Products'}
        </Link>
      </div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex flex-col gap-4"
        >
          <div className="relative w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={product.image}
              alt={t(product.title)}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 600px, 100vw"
              priority
            />
            <div className="absolute top-3 right-3 z-10">
              <FavoriteButton product={product} size="md" />
            </div>
          </div>
          {/* Gallery thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <div
                  key={img}
                  className="relative w-20 h-20 rounded-xl overflow-hidden border bg-white dark:bg-zinc-800"
                >
                  <Image
                    src={img}
                    alt={`${t(product.title)} #${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Info & Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex flex-col gap-6"
        >
          {/* Category and reviews */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
              {t(product.category)}
            </span>
            <span className="flex items-center gap-1 text-yellow-500 font-medium text-sm">
              <Star className="w-4 h-4" />
              {product.rating}
              <span className="ml-1 text-xs text-zinc-500">
                ({product.reviewCount})
              </span>
            </span>
          </div>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {t(product.title)}
          </h1>
          {/* Description */}
          <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-2">
            {t(product.description)}
          </p>
          {/* Feature list */}
          <ul className="flex flex-col gap-2 mt-3">
            {product.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.7 + i * 0.1,
                  duration: 0.4,
                  type: 'spring',
                }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-base text-zinc-700 dark:text-zinc-300"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                {t(feature)}
              </motion.li>
            ))}
          </ul>
          {/* Pricing */}
          <div className="flex items-end gap-4 mt-4 mb-2">
            <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-zinc-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {/* Add to Cart */}
          <Button
            className="w-full py-6 mt-2 text-lg flex items-center justify-center gap-2 font-semibold"
            size="lg"
          >
            <ShoppingCart className="w-6 h-6" />
            {lang === 'tr' ? 'Sepete Ekle' : 'Add to Cart'}
          </Button>
        </motion.div>
      </section>
      {/* Sticky Add to Cart bar for mobile */}
      <div className="fixed md:hidden bottom-0 left-0 w-full bg-white/90 dark:bg-zinc-900/95 border-t border-zinc-200 dark:border-zinc-800 z-50 shadow-lg backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-3">
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">
            ${product.price}
          </span>
          <Button
            className="flex-1 ml-4 flex items-center justify-center gap-2"
            size="lg"
          >
            <ShoppingCart className="w-5 h-5" />
            {lang === 'tr' ? 'Sepete Ekle' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </main>
  );
}
