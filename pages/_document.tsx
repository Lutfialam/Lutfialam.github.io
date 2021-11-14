import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content="Lutfi Alamsyah's portfolio" />
          <meta name='keywords' content='Lutfi Alamsyah portfolio' />
          <meta name='author' content='Lutfi Alamsyah' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
