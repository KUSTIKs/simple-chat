import { FC } from 'react';

import { Avatar, Icon, TextInput } from '@simple-chat/components';

import * as S from './header.style';

export const Header: FC = () => {
  return (
    <S.Header>
      <S.UserInfo>
        <Avatar alt='avatar' src={null} />
        <S.Name>Artem Khvostyk</S.Name>
      </S.UserInfo>
      <TextInput placeholder='search' startIcon={Icon.SearchLine} />
    </S.Header>
  );
};
