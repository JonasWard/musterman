import { getTranslations } from "@/utilities/l10n";
import { Metadata } from "next";
import { Props } from "../layout";
import Main from "../main";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: `${t.pages.about} — ${t.home.meta.title}`,
    description: t.about.meta.description,
  };
}

export default async function About({ params }: Readonly<Props>) {
  const { locale } = await params;
  const t = getTranslations(locale);
  return (
    <Main locale={locale} page="about">
      <div className="max-w-2xl">
        <p className="text-xs font-bold tracking-[0.45em] uppercase mb-6 text-[#c49a4a]">
          {t.pages.about}
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-10">
          {t.about.heading}
        </h1>
        <div
          className="text-lg text-[#555] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.about.subheading }}
        />
      </div>
    </Main>
  );
}
