import { FC } from 'react';

import { Avatar } from '@simple-chat/components';

import * as S from './user-info.style';

type Props = {
  name: string;
  lastTimeOnline: null | Date;
  avatarSrc: string;
};

export const UserInfo: FC<Props> = ({ avatarSrc, lastTimeOnline, name }) => {
  const formattedDate = lastTimeOnline && lastTimeOnline.toLocaleString();
  const avatarAlt = `${name}'s avatar`;

  return (
    <S.Wrapper>
      <Avatar alt={avatarAlt} src={avatarSrc} />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.LastTimeOnline isOnline={!lastTimeOnline}>
          {formattedDate || 'online'}
        </S.LastTimeOnline>
      </S.Info>
    </S.Wrapper>
  );
};
