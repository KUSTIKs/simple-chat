import styled, { css } from 'styled-components';

import { AvatarSize } from './avatar.types';

const getAvatarSize = (size: AvatarSize) => {
  if (size === 's') {
    return '40px';
  }
  return '50px';
};

export const Wrapper = styled.div<{
  size?: AvatarSize;
}>(
  ({ size = 'm' }) => css`
    height: ${getAvatarSize(size)};
    width: ${getAvatarSize(size)};
    flex: 0 0 auto;
    position: relative;
  `
);

export const OnlineBullet = styled.div(
  ({ theme }) => css`
    position: absolute;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.accent.shade100.string()};
    box-shadow: 0 0 0 2px white;
    right: 0;
    bottom: calc(50% * (${Math.sin(-Math.PI / 4)} + 1));
    left: calc(50% * (${Math.cos(-Math.PI / 4)} + 1));
  `
);

export const Avatar = styled.img(
  () => css`
    border-radius: 50%;
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
  `
);
