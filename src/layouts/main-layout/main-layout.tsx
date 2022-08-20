import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '@simple-chat/widgets';

import * as S from './main-layout.style';

export const MainLayout: FC = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
