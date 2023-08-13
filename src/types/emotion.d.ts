import '@emotion/react';
import { Theme as MaterialUITheme } from '@mui/material/styles';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MaterialUITheme { };
}
