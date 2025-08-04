'use client';

import { toggleFavorite } from '@/store/slices/favoritesSlice';
import { Product } from '@/lib/data';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { RootState } from '@/store';

interface FavoriteButtonProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function FavoriteButton({
  product,
  size = 'md',
  className = '',
}: FavoriteButtonProps) {
  const dispatch = useDispatch();
  // Type your selector!
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleToggle = () => {
    dispatch(toggleFavorite(product));
  };

  const sizeClasses = {
    sm: 'w-4 h-4 p-1',
    md: 'w-6 h-6 p-1',
    lg: 'w-8 h-8 p-1.5',
  };

  return (
    <Button
      type="button"
      onClick={handleToggle}
      size="icon"
      variant={isFavorite ? 'destructive' : 'outline'}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      className={sizeClasses[size] + ' ' + className}
    >
      <svg
        fill={isFavorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </Button>
  );
}
