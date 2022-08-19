import { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './config';
import { MainLayout } from './layouts';

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainLayout>Hello</MainLayout>
    </ThemeProvider>
  );
};
