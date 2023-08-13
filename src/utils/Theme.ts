import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';

export const DarkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a7a8a9',
    },
    secondary: {
      main: '#2f5bff',
      light: '#0048ff',
      dark: '#002ed6',
    },
    text: {
      primary: '#ecedee',
    },
    background: {
      paper: '#151718',
      default: '#1a1d1e',
    },
    divider: '#1f1f1f',
  },
});

export const LightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#575859',
    },
    secondary: {
      main: '#2f5bff',
      light: '#0048ff',
      dark: '#002ed6',
    },
    text: {
      primary: '#11181c',
    },
    background: {
      paper: '#f8f9fa',
      default: '#ffffff',
    },
    divider: '#e1e2e3',
  },
});
