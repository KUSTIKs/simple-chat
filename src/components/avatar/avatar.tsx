import { FC } from 'react';

import { DefaultAvatarImg } from '@simple-chat/assets';

import * as S from './avatar.style';
import { AvatarSize } from './avatar.types';

interface Props {
  alt: string;
  src: string | null | undefined;
  size?: AvatarSize;
}

export const Avatar: FC<Props> = ({ size, src, alt }) => {
  const actualSrc = src ?? DefaultAvatarImg;

  return <S.Avatar size={size} src={actualSrc} alt={alt} />;
};
