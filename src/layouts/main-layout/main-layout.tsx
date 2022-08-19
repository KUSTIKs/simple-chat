import { FC, ReactNode } from 'react';

import { Sidebar } from '@simple-chat/widgets';

import * as S from './main-layout.style';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};
