import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@root/firebaseconfig';
import { useTheme } from 'styled-components';

import { AuthPage, ChatPage, LoadingPage, MainPage } from '@simple-chat/pages';
import { MainLayout } from '@simple-chat/layouts';
import { useMediaQuery } from '@simple-chat/hooks';

export const AppRouter: FC = () => {
  const [user, isLoading] = useAuthState(auth);
  const isMobile = useMediaQuery(`(max-width: ${useTheme().widths.mobile})`);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    return <AuthPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainPage />} />
          {!isMobile && <Route path=':chatId' element={<ChatPage />} />}
        </Route>
        {isMobile && <Route path=':chatId' element={<ChatPage />} />}
      </Routes>
    </BrowserRouter>
  );
};
