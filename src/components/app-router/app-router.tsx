import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@root/firebaseconfig';

import { AuthPage, ChatPage, LoadingPage, MainPage } from '@simple-chat/pages';
import { MainLayout } from '@simple-chat/layouts';

export const AppRouter: FC = () => {
  const [user, isLoading, error] = useAuthState(auth);

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
          <Route path=':chatId' element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
