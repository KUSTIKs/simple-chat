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

export const UserSection = styled.div(
  () => css`
    display: flex;
    gap: 15px;
    align-items: center;
  `
);

export const UserInfo = styled.div(
  () => css`
    display: flex;
    align-items: center;
    gap: 15px;
    flex: 1;
  `
);

export const Name = styled.span(
  () => css`
    font-weight: 500;
    font-size: 20px;
  `
);

export const LogoutButton = styled.button(
  ({ theme }) => css`
    font-size: 22px;
    padding: 8px;
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
