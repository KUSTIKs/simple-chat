import styled, { css } from 'styled-components';

export const Header = styled.header(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 15px;
    border-bottom: 2px solid ${theme.colors.grey.shade100.string()};
    background-color: white;
  `
);

export const UserInfo = styled.div(
  () => css`
    display: flex;
    align-items: center;
    gap: 15px;
  `
);

export const Name = styled.span(
  () => css`
    font-weight: 500;
    font-size: 20px;
  `
);
