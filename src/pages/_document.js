import { Html, Head, Main, NextScript } from "next/document";
const ogImageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ""}/images/logo.png`;
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <title>JARSY: High-Quality, Comfortable Footwear Made in India</title>
        <meta
          name="facebook-domain-verification"
          content="1zapzin03jjqn89xjuwqa8j5g5uilt"
        />
        <meta
          name="description"
          content="Discover JARSY Shoes for men and women, proudly made in India. Our collection offers high-quality, comfortable, and stylish footwear for all occasion. Shop now!"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://jarsy.in" />
        <meta property="og:image" content={ogImageUrl} />
        <meta
          property="og:image:alt"
          content="JARSY: High-Quality, Comfortable Footwear Made in India"
        />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Jarsy" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="JARSY: High-Quality, Comfortable Footwear Made in India"
        />
        <meta
          property="og:description"
          content="Discover JARSY Shoes for men and women, proudly made in India. Our collection offers high-quality, comfortable, and stylish footwear for all occasion. Shop now!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jarsy.in" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
