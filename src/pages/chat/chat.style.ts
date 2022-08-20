import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  () => css`
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
  `
);

export const MessageList = styled.ul(
  ({ theme }) => css`
    list-style: none;
    scrollbar-gutter: stable;
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 15px;
  `
);
