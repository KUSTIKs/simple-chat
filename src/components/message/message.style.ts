import styled, { css, DefaultTheme } from 'styled-components';

import { MessageDirection, MessageVariant } from './message.types';

export const Wrapper = styled.div<{
  direction?: MessageDirection;
}>(
  ({ direction = 'ltr' }) => css`
    display: flex;
    gap: 10px;
    align-items: start;
    flex-direction: ${direction === 'rtl' ? 'row-reverse' : 'row'};
    ${MessageColumn} {
      align-items: ${direction === 'rtl' ? 'end' : 'start'};
    }
  `
);

export const MessageColumn = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: min(${theme.widths.maxMessage}, calc(100% - 15px));
  `
);

const getMessageVariantStyles = (
  variant: MessageVariant,
  theme: DefaultTheme
) => {
  if (variant === 'dark') {
    return css`
      background-color: ${theme.colors.secondary.shade100.string()};
      color: white;
    `;
  }
  return css`
    background-color: ${theme.colors.grey.shade200.string()};
    color: ${theme.colors.text.shade400.string()};
  `;
};

export const Message = styled.div<{
  variant?: MessageVariant;
}>(
  ({ theme, variant = 'dark' }) => css`
    padding: 5px 10px;
    border-radius: 10px;
    width: fit-content;
    font-family: inherit;
    ${getMessageVariantStyles(variant, theme)}
  `
);

export const MessageContent = styled.p(
  () => css`
    word-break: break-word;
    white-space: pre-wrap;
    font-size: 16px;
    line-height: 1.3em;
  `
);

export const Date = styled.span(
  ({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.text.shade200.string()};
  `
);
