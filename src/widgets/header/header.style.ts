import styled, { css } from 'styled-components';

export const Header = styled.header(
  ({ theme }) => css`
    background-color: white;
    padding: 15px 20px;
    width: 100%;
    border-bottom: 2px solid ${theme.colors.grey.shade100.string()};
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    gap: 15px;
    align-items: center;
  `
);

export const BackButton = styled.button(
  ({ theme }) => css`
    font-size: 22px;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 200ms ease;
    color: ${theme.colors.text.shade300.lighten(0.5).string()};
    background-color: ${theme.colors.grey.shade100.string()};
    display: flex;
    &:hover {
      background-color: ${theme.colors.grey.shade200.string()};
    }
  `
);
