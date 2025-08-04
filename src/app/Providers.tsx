'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children, ...props }: ProviderProps) {
  return (
    <Provider store={store}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </Provider>
  );
}
