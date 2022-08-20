import { FC } from 'react';

import * as S from './header.style';
import { UserInfo } from './subcomponents';

type Props = {
  avatarSrc: string;
  lastTimeOnline: null | Date;
  name: string;
};

export const Header: FC<Props> = ({ avatarSrc, lastTimeOnline, name }) => {
  return (
    <S.Header>
      <UserInfo
        avatarSrc={avatarSrc}
        lastTimeOnline={lastTimeOnline}
        name={name}
      />
    </S.Header>
  );
};
