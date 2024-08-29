import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <title>JARSY: High-Quality, Comfortable Footwear Made in India</title>
        <meta
          name="description"
          content="Discover JARSY Shoes for men and women, proudly made in India. Our collection offers high-quality, comfortable, and stylish footwear for every occasion. Shop now!"
        />
        <link rel="canonical" href="https://www.jarsy.in" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Jarsy" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="JARSY: High-Quality, Comfortable Footwear Made in India"
        />
        <meta
          property="og:description"
          content="Discover JARSY Shoes for men and women, proudly made in India. Our collection offers high-quality, comfortable, and stylish footwear for every occasion. Shop now!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jarsy.in" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
