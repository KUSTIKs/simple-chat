import styled, { css } from 'styled-components';

export const Sidebar = styled.aside(
  ({ theme }) => css`
    width: 100%;
    flex-shrink: 0;
    max-width: ${theme.widths.sidebar};
    border-right: 2px solid ${theme.colors.grey.shade100.string()};
    height: 100vh;
    overflow: auto;
  `
);

export const SectionsList = styled.ul(
  () => css`
    display: grid;
    list-style: none;
  `
);

export const ChatsList = styled.ul(
  () => css`
    display: grid;
    list-style: none;
  `
);
