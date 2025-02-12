import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="PG Phone Shop ผ่อนมือถือ เดอะมอลล์โคราช ชั้น 3 รับซื้อ ซ่อม เทิร์น มือถือ"
        />
        <meta
          name="keywords"
          content="มือถือ, สมาร์ทโฟน, ร้านขายมือถือ, ราคามือถือ, สั่งซื้อมือถือออนไลน์, ผ่อนมือถือ"
        />
        <meta
          property="og:title"
          content="PG Phone Shop ผ่อนมือถือ เดอะมอลล์โคราช ชั้น 3"
        />
        <meta
          property="og:description"
          content="ร้านขายมือถือที่มีสินค้าคุณภาพสูง ทุกรุ่นทุกยี่ห้อ ผ่อนมือถือได้ที่ เดอะมอลล์โคราช ชั้น 3"
        />
        <meta property="og:image" content="/img/phone-1.jpg" />
        {/* <meta property="og:url" content="https://yourwebsite.com" /> */}
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />

        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <title>PG Phone Shop ผ่อนมือถือ เดอะมอลล์โคราช ชั้น 3 รับซื้อ ซ่อม เทิร์น มือถือ</title>


         <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>




      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}


      


      </body>
    </html>
  );
}
