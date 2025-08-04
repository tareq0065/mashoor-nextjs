import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';
import { Provider } from 'react-redux';
import { store } from '@/store';
import products from '@/mock-data/products.json';

const product = products.featured[0];

describe('FavoriteButton', () => {
  it('toggles favorite state on click', () => {
    render(
      <Provider store={store}>
        <FavoriteButton product={product} />
      </Provider>,
    );

    const button = screen.getByRole('button');
    // Should be not favorite initially
    expect(button).toHaveAttribute('aria-label', 'Add to favorites');

    // Click to favorite
    fireEvent.click(button);
    // Should now be "Remove from favorites"
    expect(button).toHaveAttribute('aria-label', 'Remove from favorites');
  });
});
