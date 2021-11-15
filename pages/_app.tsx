import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SimpleReactLightbox from 'simple-react-lightbox';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
const feather = require('feather-icons');

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <ThemeProvider attribute='class'>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}
export default MyApp;
