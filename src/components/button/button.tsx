import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import * as S from './button.style';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button: FC<Props> = ({ children, ...attrs }) => {
  return <S.Button {...attrs}>{children}</S.Button>;
};
