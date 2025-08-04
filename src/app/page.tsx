import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/lib/constants';

export default function RootPage() {
  // Redirect root path to default locale
  console.log('checking:', `/${DEFAULT_LOCALE}`);
  redirect(`/${DEFAULT_LOCALE}`);
}
