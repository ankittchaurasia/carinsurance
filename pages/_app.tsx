import { AppProps } from 'next/app';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import '../styles/global.css';
import NextNProgress from 'nextjs-progressbar';

export default function App(props: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const { Component, pageProps } = props;

  return (
    <>
     <NextNProgress />
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'monospace, Verdana, sans-serif',
          colorScheme,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}