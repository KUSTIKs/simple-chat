import styled, { css, keyframes } from 'styled-components';

export const Spinner = styled.div(
  () => css`
    margin: 20px auto;
    width: 40px;
    height: 40px;
    position: relative;
    transform: rotateZ(45deg);
  `
);

const Cube = styled.div(
  () => css`
    float: left;
    width: 50%;
    height: 50%;
    transform: scale(1.1);
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #333;
      animation: ${foldCubeAngle} 2.4s infinite linear both;
      transform-origin: 100% 100%;
    }
  `
);

export const Cube1 = styled(Cube)(() => css``);

export const Cube2 = styled(Cube)(
  () => css`
    transform: scale(1.1) rotateZ(90deg);
    &::before {
      animation-delay: 0.3s;
    }
  `
);

export const Cube3 = styled(Cube)(
  () => css`
    transform: scale(1.1) rotateZ(180deg);
    &::before {
      animation-delay: 0.6s;
    }
  `
);

export const Cube4 = styled(Cube)(
  () => css`
    transform: scale(1.1) rotateZ(270deg);
    &::before {
      animation-delay: 0.9s;
    }
  `
);

const foldCubeAngle = keyframes`
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`;
