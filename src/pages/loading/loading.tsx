import { FC } from 'react';

import { Spinner } from '@simple-chat/components';

import * as S from './loading.style';

export const LoadingPage: FC = () => {
  return (
    <S.Wrapper>
      <Spinner />
    </S.Wrapper>
  );
};
