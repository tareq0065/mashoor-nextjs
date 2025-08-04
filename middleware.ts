import { NextRequest, NextResponse } from 'next/server';

const locales = ['tr', 'en'];

function getLocale(request: NextRequest): string {
  const accept = request.headers.get('accept-language');
  // Only use English if browser sends 'en' first
  if (accept && accept.startsWith('en')) return 'en';
  return 'tr'; // Default to Turkish
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    )
  ) {
    return NextResponse.next();
  }
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
