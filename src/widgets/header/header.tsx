import { FC } from 'react';

import * as S from './header.style';
import { UserInfo } from './subcomponents';

export const Header: FC = () => {
  return (
    <S.Header>
      <UserInfo
        avatarSrc='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        lastTimeOnline={null}
        name='Henrietta Holmes'
      />
    </S.Header>
  );
};
