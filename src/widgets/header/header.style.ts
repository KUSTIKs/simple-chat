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
  `
);
