import styled, { css } from 'styled-components';

export const Section = styled.article(
  () => css`
    display: grid;
  `
);

export const Header = styled.header(
  () => css`
    padding: 15px 15px 0;
    width: 100%;
  `
);

export const Title = styled.h3(
  () => css`
    font-weight: 500;
    font-size: 18px;
  `
);
