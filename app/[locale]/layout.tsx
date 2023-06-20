import "./globals.css";
import "swiper/css/bundle";

import { NextIntlClientProvider, createTranslator, useLocale } from "next-intl";
import { notFound } from "next/navigation";

import { ExoFont, IranYekan } from "@/src/components/localeFont/fonts";
import Header from "@/src/components/header/Header";
import { ReactNode } from "react";
import Footer from "@/src/components/footer/Footer";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);


  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
  };
}

export default async function RootLayout({ children, params: { locale } }: Props) {


  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body
        className={`${IranYekan.variable} ${ExoFont.variable}  ${
          locale === "en" ? " exo" : "iranYekan"
        }`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
