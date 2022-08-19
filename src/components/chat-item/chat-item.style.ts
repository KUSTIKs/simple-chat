import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    padding: 10px 15px;
    min-height: 100px;
    display: flex;
    align-items: center;
    gap: 15px;
    user-select: none;
    cursor: pointer;
    transition: background-color 100ms ease;
    &:hover {
      background-color: ${theme.colors.grey.shade100.string()};
    }
  `
);

export const Info = styled.div(
  () => css`
    display: grid;
    width: 100%;
  `
);

export const InfoLine = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    gap: 5px;
  `
);

export const Name = styled.span(
  () => css`
    font-weight: 500;
    flex: 1;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
);

export const Date = styled.span(
  ({ theme }) => css`
    color: ${theme.colors.text.shade200.string()};
    font-size: 14px;
  `
);

export const Message = styled.span(
  ({ theme }) => css`
    color: ${theme.colors.text.shade100.string()};
    font-size: 14px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `
);
