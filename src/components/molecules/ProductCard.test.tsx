import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Provider } from 'react-redux';
import { store } from '@/store'; // Adjust path as needed
import products from '@/mock-data/products.json';

const product = products.featured[0];

describe('ProductCard', () => {
  it('renders product title, description, and price', () => {
    render(
      <Provider store={store}>
        <ProductCard product={product} lang="en" />
      </Provider>,
    );
    expect(screen.getByText(product.title.en)).toBeInTheDocument();
    expect(screen.getByText(product.description.en)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
  });

  it('renders Add to Cart button', () => {
    render(
      <Provider store={store}>
        <ProductCard product={product} lang="en" />
      </Provider>,
    );
    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument();
  });

  it('renders FavoriteButton', () => {
    render(
      <Provider store={store}>
        <ProductCard product={product} lang="en" />
      </Provider>,
    );
    expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument();
  });
});
