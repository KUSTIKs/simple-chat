import { onAuthStateChanged } from 'firebase/auth';
import { FC, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';

import { auth } from '@root/firebaseconfig';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from './components';
import { defaultTheme } from './config';
import { usersService } from './services';
import { store } from './store';

const queryClient = new QueryClient();

export const App: FC = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      usersService.handleOnline();
    });

    window.addEventListener('blur', usersService.handleOffline);
    window.addEventListener('unload', usersService.handleOffline);
    window.addEventListener('focus', usersService.handleOnline);

    () => {
      window.removeEventListener('blur', usersService.handleOffline);
      window.removeEventListener('unload', usersService.handleOffline);
      window.removeEventListener('focus', usersService.handleOnline);
      usersService.handleOffline();
      unsubscribe();
    };
  });

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
