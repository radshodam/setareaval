import "./globals.css";
import "swiper/css/bundle";

import { NextIntlClientProvider, createTranslator, useLocale } from "next-intl";
import { notFound } from "next/navigation";

import { ExoFont, IranYekan } from "@/src/components/localeFont/fonts";
import Header from "@/src/components/header/Header";
import { ReactNode } from "react";
import Footer from "@/src/components/footer/Footer";

export const metadata = {
  title: "شرکت ستاره اول",
  description:
    "شرکت ستاره‌اول به عنوان زیرمجموعه هلدینگ همراه‌اول با سرعت رشد بسیار بالا در حوزه ICT شناخته شده است. این شرکت به جهت ارائه خدمات اپراتوری، شروع به کار کرد.",
};

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

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
  };
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  // // Show a 404 error if the user requests an unknown locale
  // if (params.locale !== locale) {
  //   notFound();
  // }

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
