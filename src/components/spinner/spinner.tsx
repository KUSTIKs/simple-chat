import { FC } from 'react';

import * as S from './spinner.style';

export const Spinner: FC = () => {
  return (
    <S.Spinner>
      <S.Cube1 />
      <S.Cube2 />
      <S.Cube4 />
      <S.Cube3 />
    </S.Spinner>
  );
};
