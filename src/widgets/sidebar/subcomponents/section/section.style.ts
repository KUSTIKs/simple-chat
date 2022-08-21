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
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
);

export const ActionsContainer = styled.div(
  () => css`
    display: flex;
    gap: 10px;
  `
);

export const Title = styled.h3(
  () => css`
    font-weight: 500;
    font-size: 18px;
  `
);
