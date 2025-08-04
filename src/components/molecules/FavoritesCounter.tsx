'use client';

import { Locale } from '@/types/language';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

interface FavoritesCounterProps {
  lang: Locale;
}

export default function FavoritesCounter({ lang }: FavoritesCounterProps) {
  const favoritesCount = useSelector(
    (state: RootState) => state.favorites.count,
  );

  const text = lang === 'tr' ? 'favori' : 'favorites';

  return (
    <div className="flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">
      <span>❤️</span>
      <span>
        {favoritesCount} {text}
      </span>
    </div>
  );
}
