'use client';

import { Product, getLocalizedText } from '@/lib/data';
import { Locale } from '@/types/language';
import FavoriteButton from '@/components/atoms/FavoriteButton';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  lang: Locale;
}

export default function ProductCard({ product, lang }: ProductCardProps) {
  const detailsHref = `/${lang}/product/${product.id}`;

  return (
    <Card
      className="
        group relative cursor-pointer
        hover:shadow-xl transition-shadow
        h-full flex flex-col border-none p-0 rounded-2xl
        bg-white dark:bg-zinc-900
        text-zinc-900 dark:text-zinc-100
        shadow-md dark:shadow-lg
      "
    >
      {/* Favorite Button (stop click propagation for details link) */}
      <div
        className="absolute top-3 right-3 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <FavoriteButton product={product} size="md" />
      </div>
      <Link
        href={detailsHref}
        tabIndex={-1}
        className="flex-1 flex flex-col h-full no-underline"
      >
        {/* Product Image */}
        <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={getLocalizedText(product.title, lang)}
            fill
            sizes="(min-width: 768px) 340px, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <CardContent className="flex-1 flex flex-col gap-3 pt-4">
          <CardTitle className="text-lg font-semibold leading-tight">
            {getLocalizedText(product.title, lang)}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">
            {getLocalizedText(product.description, lang)}
          </CardDescription>
          <div
            className="
              text-xs
              text-blue-600 dark:text-blue-300
              bg-blue-50 dark:bg-blue-900/30
              px-2 py-1 rounded-full inline-block w-fit
            "
          >
            {getLocalizedText(product.category, lang)}
          </div>
          <ul className="space-y-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-1 text-xs text-gray-500 dark:text-zinc-400"
              >
                <span className="w-1 h-1 bg-gray-400 dark:bg-zinc-500 rounded-full" />
                {getLocalizedText(feature, lang)}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 mt-auto">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 dark:text-zinc-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-400">
              <span>⭐</span>
              <span>{product.rating}</span>
              <span>({product.reviewCount})</span>
            </div>
          </div>
          {/* Add to Cart button: Prevent navigation when clicked */}
          <Button
            className="w-full mt-2"
            size="sm"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // You can trigger your Add to Cart logic here!
            }}
          >
            {lang === 'tr' ? 'Sepete Ekle' : 'Add to Cart'}
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
