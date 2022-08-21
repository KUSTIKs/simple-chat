import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `
);

export const Note = styled.h2(
  ({ theme }) => css`
    font-size: 24px;
    font-weight: 600;
    color: ${theme.colors.text.shade100.string()};
  `
);
