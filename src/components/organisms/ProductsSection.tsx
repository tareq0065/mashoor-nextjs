'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/molecules/ProductCard';
import SkeletonCard from '@/components/molecules/SkeletonCard';
import { Product } from '@/lib/data';
import { Locale } from '@/types/language';

interface ProductsSectionProps {
  products: Product[];
  lang: Locale;
}

export default function ProductsSection({
  products,
  lang,
}: ProductsSectionProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {loading
        ? Array.from({ length: 3 }).map((_, idx) => <SkeletonCard key={idx} />)
        : products.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} />
          ))}
    </div>
  );
}
