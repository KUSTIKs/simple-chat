import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  () => css`
    height: 100%;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);
