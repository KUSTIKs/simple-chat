import { FC } from 'react';
import { useQuery } from 'react-query';

import { Avatar, Icon, TextInput } from '@simple-chat/components';
import { QueryKey } from '@simple-chat/enums';
import { UsersService } from '@simple-chat/services';
import { getFullName } from '@simple-chat/utils';

import * as S from './header.style';

export const Header: FC = () => {
  const { data: user } = useQuery(
    [QueryKey.USERS, 'current'],
    UsersService.getCurrent
  );
  const fullName = user && getFullName(user);

  return (
    <S.Header>
      <S.UserInfo>
        <Avatar alt='avatar' src={user?.avatarUrl} />
        <S.Name>{fullName}</S.Name>
      </S.UserInfo>
      <TextInput placeholder='search' startIcon={Icon.SearchLine} />
    </S.Header>
  );
};
