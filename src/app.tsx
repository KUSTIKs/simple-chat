import { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './config';
import { MainLayout } from './layouts';
import { Header, MessageInput } from './widgets';

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainLayout>
        <Header />
        Hello
        <MessageInput />
      </MainLayout>
    </ThemeProvider>
  );
};
