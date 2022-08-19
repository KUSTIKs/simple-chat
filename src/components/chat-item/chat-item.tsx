import { FC } from 'react';

import { Avatar } from '../avatar';

import * as S from './chat-item.style';

type Props = {
  message: string;
  name: string;
  avatarSrc: string;
  date: Date;
  onClick?(): void;
};

export const ChatItem: FC<Props> = ({
  avatarSrc,
  message,
  name,
  date,
  onClick,
}) => {
  const AvatarAlt = `${name}'s avatar`;
  const formattedDate = date.toLocaleDateString();

  return (
    <S.Wrapper onClick={onClick}>
      <Avatar src={avatarSrc} alt={AvatarAlt} />
      <S.Info>
        <S.InfoLine>
          <S.Name>{name}</S.Name>
          <S.Date>{formattedDate}</S.Date>
        </S.InfoLine>
        <S.Message>{message}</S.Message>
      </S.Info>
    </S.Wrapper>
  );
};
