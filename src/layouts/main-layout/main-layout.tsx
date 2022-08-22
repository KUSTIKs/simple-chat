import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { useTheme } from 'styled-components';

import { Sidebar } from '@simple-chat/widgets';
import { useMediaQuery } from '@simple-chat/hooks';

import * as S from './main-layout.style';

export const MainLayout: FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${useTheme().widths.mobile})`);

  return (
    <S.Wrapper>
      <Sidebar />
      {!isMobile && (
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
      )}
    </S.Wrapper>
  );
};
