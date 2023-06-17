import localFont from "next/font/local";
import { Exo } from "next/font/google";


// Font inside of `src/fonts/iranYekan`
export const IranYekan = localFont({
  src: [
    {
      path: "../src/fonts/iranYekan/iranyekanweblight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../src/fonts/iranYekan/iranyekanwebregular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../src/fonts/iranYekan/iranyekanwebbold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--font-iranYekan",
});


export const ExoFont = Exo({
  variable: '--font-exo',
  subsets:["latin"]
})