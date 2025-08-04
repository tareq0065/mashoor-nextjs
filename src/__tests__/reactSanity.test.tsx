import React from 'react';
import { render, screen } from '@testing-library/react';

function Hello() {
  return <div>Hello World</div>;
}

test('renders Hello World', () => {
  render(<Hello />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
