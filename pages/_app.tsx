import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SimpleReactLightbox from 'simple-react-lightbox'
import { ThemeProvider, useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ThemeProvider>
  )
}
export default MyApp