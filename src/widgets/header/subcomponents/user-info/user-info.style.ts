import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  () => css`
    display: flex;
    align-items: center;
    gap: 15px;
  `
);

export const Info = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    line-height: 1.25em;
  `
);

export const Name = styled.h2(
  () => css`
    font-weight: 500;
    font-size: 20px;
  `
);

export const LastTimeOnline = styled.span<{
  isOnline: boolean;
}>(
  ({ theme, isOnline }) => css`
    font-weight: 500;
    font-size: 14px;
    color: ${isOnline
      ? theme.colors.accent.shade100.string()
      : theme.colors.text.shade100.string()};
  `
);
