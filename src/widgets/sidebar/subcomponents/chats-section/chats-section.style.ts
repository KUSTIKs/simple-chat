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
export const ActionButton = styled.button(
  ({ theme }) => css`
    font-size: 18px;
    padding: 5px;
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
