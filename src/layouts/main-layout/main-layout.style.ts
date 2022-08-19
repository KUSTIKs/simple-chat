import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  () => css`
    display: flex;
    width: 100%;
  `
);

export const ContentWrapper = styled.main(
  () => css`
    flex-grow: 1;
  `
);
