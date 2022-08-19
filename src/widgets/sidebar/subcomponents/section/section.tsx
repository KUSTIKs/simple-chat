import { FC, ReactNode } from 'react';

import * as S from './section.style';

type Props = {
  title: string;
  children: ReactNode;
};

export const Section: FC<Props> = ({ children, title }) => {
  return (
    <S.Section>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>
      {children}
    </S.Section>
  );
};
