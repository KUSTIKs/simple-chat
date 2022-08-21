import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  () => css`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `
);

export const Title = styled.h1(
  ({ theme }) => css`
    font-size: 32px;
    font-weight: 700;
    color: ${theme.colors.text.shade300.string()};
  `
);
