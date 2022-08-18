import { forwardRef, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import * as S from './text-input.style';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  startIcon?: IconType;
  endIcon?: IconType;
  maxWidth?: number;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ startIcon: StartIcon, endIcon: EndIcon, maxWidth, ...attrs }, ref) => {
    return (
      <S.Wrapper maxWidth={maxWidth}>
        {StartIcon && (
          <S.Icon style={{ left: 10 }}>
            <StartIcon />
          </S.Icon>
        )}
        <S.Input
          {...attrs}
          type='text'
          ref={ref}
          isLeftPadding={!!StartIcon}
          isRightPadding={!!EndIcon}
        />
        {EndIcon && (
          <S.Icon style={{ right: 10 }}>
            <EndIcon />
          </S.Icon>
        )}
      </S.Wrapper>
    );
  }
);
