import { FC } from 'react';

import { DefaultAvatarImg } from '@simple-chat/assets';

import * as S from './avatar.style';
import { AvatarSize } from './avatar.types';

type Props = {
  alt: string;
  src: string | null | undefined;
  size?: AvatarSize;
  isOnline?: boolean;
};

export const Avatar: FC<Props> = ({ size, src, alt, isOnline }) => {
  const actualSrc = src ?? DefaultAvatarImg;

  return (
    <S.Wrapper size={size}>
      <S.Avatar src={actualSrc} alt={alt} />
      {!!isOnline && <S.OnlineBullet />}
    </S.Wrapper>
  );
};
