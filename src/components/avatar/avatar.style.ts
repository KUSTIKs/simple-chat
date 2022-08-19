import styled, { css } from 'styled-components';

import { AvatarSize } from './avatar.types';

const getAvatarSize = (size: AvatarSize) => {
  if (size === 's') {
    return '40px';
  }
  return '50px';
};

export const Avatar = styled.img<{
  size?: AvatarSize;
}>(
  ({ size = 'm' }) => css`
    height: ${getAvatarSize(size)};
    width: ${getAvatarSize(size)};
    border-radius: 50%;
    display: block;
  `
);
