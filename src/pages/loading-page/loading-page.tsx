import { FC } from 'react';

import { Spinner } from '@simple-chat/components';

import * as S from './loading-page.style';

export const LoadingPage: FC = () => {
  return (
    <S.Wrapper>
      <Spinner />
    </S.Wrapper>
  );
};
