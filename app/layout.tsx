import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "شرکت ستاره اول",
  description:
    "شرکت ستاره‌اول به عنوان زیرمجموعه هلدینگ همراه‌اول با سرعت رشد بسیار بالا در حوزه ICT شناخته شده است. این شرکت به جهت ارائه خدمات اپراتوری، شروع به کار کرد.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
