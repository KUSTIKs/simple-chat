import styled, { css } from 'styled-components';

export const Icon = styled.div`
  display: flex;
`;

export const Wrapper = styled.div<{
  maxWidth?: number;
}>(
  ({ theme, maxWidth }) => css`
    position: relative;
    display: flex;
    ${maxWidth && `max-width: ${maxWidth}px;`}
    ${Icon} {
      font-size: 20px;
      color: ${theme.colors.text.share200.string()};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  `
);

const getInputPadding = (isPadding: boolean) => {
  return isPadding ? `${10 + 20 + 10}px` : '10px';
};

export const Input = styled.input<{
  isLeftPadding: boolean;
  isRightPadding: boolean;
}>(
  ({ isLeftPadding, isRightPadding, theme }) => css`
    flex: 1;
    width: 100px;
    padding: 8px ${getInputPadding(isRightPadding)} 8px
      ${getInputPadding(isLeftPadding)};
    border-radius: 10px;
    background-color: ${theme.colors.grey.share100.string()};
    outline: none;
  `
);
