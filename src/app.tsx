import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';

import { AppRouter } from './components';
import { defaultTheme } from './config';

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
