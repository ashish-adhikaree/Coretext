import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Extend your brain" />
        <meta property="og:title" content="Coretext" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://khojj.vercel.app" />
        <meta property="og:image" content="https://heimmerlabs.com/logo.png" />
        <meta property="og:description" content="Extend your brain" />
        <meta name="theme-color" content="#A855F7" />

        {/* <!-- This makes the og:image larger --> */}
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
