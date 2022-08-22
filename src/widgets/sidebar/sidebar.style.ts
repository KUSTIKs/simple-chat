import styled, { css } from 'styled-components';

export const Sidebar = styled.aside(
  ({ theme }) => css`
    width: 100%;
    flex-shrink: 0;
    max-width: ${theme.widths.sidebar};
    border-right: 2px solid ${theme.colors.grey.shade100.string()};
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: ${theme.widths.mobile}) {
      max-width: unset;
    }
  `
);

export const SectionsList = styled.ul(
  () => css`
    scrollbar-gutter: stable;
    display: grid;
    list-style: none;
    overflow: auto;
  `
);
