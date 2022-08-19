import { FC } from 'react';

import { Header, ChatsSection } from './subcomponents';
import * as S from './sidebar.style';

export const Sidebar: FC = () => {
  return (
    <S.Sidebar>
      <Header />
      <S.SectionsList>
        <ChatsSection />
      </S.SectionsList>
    </S.Sidebar>
  );
};
