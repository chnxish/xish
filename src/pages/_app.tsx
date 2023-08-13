import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Global, ThemeProvider, css, Theme } from '@emotion/react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '@/utils/Theme';
import { usePreferredTheme } from '@/utils/hooks/usePreferredTheme';

const GlobalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    background: ${theme.palette.background.paper};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  @supports (scrollbar-gutter: stable) {
    html {
      overflow-y: auto;
      scrollbar-gutter: stable;
    }
  }

  @supports (overflow-y: overlay) {
    html {
      overflow-y: overlay;
    }
  }

  body {
    width: 100vw;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
    background-color: ${theme.palette.mode === 'dark' ? '#0f0f0f' : '#b4b4b4'};
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 8px;
    outline: 1px solid ${theme.palette.mode === 'dark' ? '#0f0f0f' : '#b4b4b4'};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const preferredTheme = usePreferredTheme();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={preferredTheme === 'dark' ? DarkTheme : LightTheme}>
        <MUIThemeProvider theme={preferredTheme === 'dark' ? DarkTheme : LightTheme}>
          <Global styles={GlobalStyles} />
          <Component {...pageProps} />
        </MUIThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
