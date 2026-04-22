import { defaultLocale, locales } from "@/config";
import { getLocale, state } from "@/utilities/l10n";

export type LocaleParams = {
  /**
   * Optional because it's not available in `app/page.tsx`.
   */
  locale?: string;
};

/** Next.js 15+ passes `params` as a Promise for layouts and pages. */
export type Props = {
  params: Promise<LocaleParams>;
};

export function generateStaticParams(): { locale: string }[] {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<Props & { children: React.ReactNode }>) {
  const { locale } = await params;
  const activeLocale = getLocale(locale);
  state.locale = activeLocale;
  return children;
}
