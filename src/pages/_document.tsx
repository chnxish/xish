import Document, { Head, Html, NextScript, Main } from 'next/document';
import { DarkTheme } from '@/utils/Theme';

const Page = () => (
  <Html lang="zh">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content={DarkTheme.palette.secondary.main} />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="Xish" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="keywords" content="xish, website, open source, nextjs" />
      <meta name="description" content="xish's personal website" />
      <meta name="og:description" content="xish's personal website" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default class MyDocument extends Document {
  render() {
    return <Page />;
  }
}
