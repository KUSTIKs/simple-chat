import styled, { css } from 'styled-components';

export const Button = styled.button(
  ({ theme }) => css`
    padding: 8px 15px;
    border-radius: 10px;
    background-color: ${theme.colors.accent.shade100.string()};
    color: white;
    font-weight: 500;
    transition: background-color 200ms ease;
    &:hover {
      background-color: ${theme.colors.accent.shade200.string()};
    }
  `
);
