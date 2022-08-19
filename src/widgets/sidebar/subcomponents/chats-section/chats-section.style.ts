import styled, { css } from 'styled-components';

export const ChatsList = styled.ul(
  () => css`
    display: grid;
    list-style: none;
  `
);

export const Separator = styled.hr(
  ({ theme }) => css`
    border: none;
    height: 1px;
    background-color: ${theme.colors.grey.shade100.string()};
    margin: 0 15px;
  `
);
