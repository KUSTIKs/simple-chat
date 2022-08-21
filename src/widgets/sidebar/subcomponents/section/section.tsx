import { FC, ReactNode } from 'react';

import * as S from './section.style';

type Props = {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
};

export const Section: FC<Props> = ({ children, title, actions }) => {
  return (
    <S.Section>
      <S.Header>
        <S.Title>{title}</S.Title>
        {actions && <S.ActionsContainer>{actions}</S.ActionsContainer>}
      </S.Header>
      {children}
    </S.Section>
  );
};
