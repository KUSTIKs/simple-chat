import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    border-top: 2px solid ${theme.colors.grey.shade100.string()};
    min-height: ${theme.widths.messageInput};
    padding: 15px 20px;
    width: 100%;
    display: flex;
    align-items: end;
    gap: 15px;
    overflow: hidden;
    background-color: white;
  `
);

export const GrowContainer = styled.div(
  () => css`
    display: grid;
    max-height: ${7 * 1.5}em;
    overflow: auto;
    flex: 1;
    &::before {
      content: attr(data-replicated-value) ' ';
      white-space: pre-wrap;
      visibility: hidden;
    }
    ${TextArea}, &::before {
      grid-area: 1 / 1 / 2 / 2;
    }
  `
);

export const TextArea = styled.textarea(
  () => css`
    background: none;
    outline: none;
    resize: none;
  `
);

export const IconButton = styled.button<{
  isAccent: boolean;
}>(
  ({ theme, isAccent }) => css`
    display: flex;
    font-size: 24px;
    color: ${isAccent
      ? theme.colors.accent.shade100.string()
      : theme.colors.text.shade100.string()};
    background: none;
  `
);
