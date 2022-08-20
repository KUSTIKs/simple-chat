import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import { AppRouter } from './components';
import { defaultTheme } from './config';
import { store } from './store';

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <StoreProvider store={store}>
          <AppRouter />
        </StoreProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
