import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { Avatar, Icon, TextInput } from '@simple-chat/components';
import { QueryKey } from '@simple-chat/enums';
import { UsersService } from '@simple-chat/services';
import { getFullName } from '@simple-chat/utils';
import { useDebounce } from '@simple-chat/hooks';
import { appActions } from '@simple-chat/store';

import * as S from './header.style';

export const Header: FC = () => {
  const { data: user } = useQuery(
    [QueryKey.USERS, 'current'],
    UsersService.getCurrent
  );
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useDispatch();

  const fullName = user && getFullName(user);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(appActions.setSearch(debouncedSearch.trim()));
  }, [debouncedSearch, dispatch]);

  return (
    <S.Header>
      <S.UserInfo>
        <Avatar alt='avatar' src={user?.avatarUrl} />
        <S.Name>{fullName}</S.Name>
      </S.UserInfo>
      <TextInput
        placeholder='Search'
        startIcon={Icon.SearchLine}
        value={search}
        onChange={handleChange}
      />
    </S.Header>
  );
};
