import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChatPage, MainPage } from '@simple-chat/pages';
import { MainLayout } from '@simple-chat/layouts';

export const AppRouter: FC = () => {
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
