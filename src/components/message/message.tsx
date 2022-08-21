import { FC } from 'react';

import { Avatar } from '../avatar';

import { MessageDirection, MessageVariant } from './message.types';
import * as S from './message.style';

type Props = {
  content: string;
  date: Date;
  name: string;
  avatarUrl?: string;
  noAvatar?: boolean;
  variant?: MessageVariant;
  direction?: MessageDirection;
};

export const Message: FC<Props> = ({
  avatarUrl,
  content,
  date,
  name,
  variant,
  direction,
  noAvatar,
}) => {
  const avatarAlt = `${name}'s avatar`;
  const formattedDate = date.toLocaleString();

  return (
    <S.Wrapper direction={direction}>
      {!noAvatar && <Avatar alt={avatarAlt} src={avatarUrl} />}
      <S.MessageColumn>
        <S.Message variant={variant}>
          <S.MessageContent>{content}</S.MessageContent>
        </S.Message>
        <S.Date>{formattedDate}</S.Date>
      </S.MessageColumn>
    </S.Wrapper>
  );
};
