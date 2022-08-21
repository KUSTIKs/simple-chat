import { FC } from 'react';

import * as S from './header.style';
import { UserInfo } from './subcomponents';

type Props = {
  avatarUrl: string;
  name: string;
  lastTimeOnline: Date | null;
};

export const Header: FC<Props> = ({ avatarUrl, lastTimeOnline, name }) => {
  return (
    <S.Header>
      <UserInfo
        avatarSrc={avatarUrl}
        lastTimeOnline={lastTimeOnline}
        name={name}
      />
    </S.Header>
  );
};
