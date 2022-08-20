import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@root/firebaseconfig';

import { Avatar, Icon, TextInput } from '@simple-chat/components';
import { useDebounce } from '@simple-chat/hooks';
import { appActions } from '@simple-chat/store';

import * as S from './header.style';

export const Header: FC = () => {
  const [user] = useAuthState(auth);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    dispatch(appActions.setSearch(debouncedSearch.trim()));
  }, [debouncedSearch, dispatch]);

  return (
    <S.Header>
      <S.UserSection>
        <S.UserInfo>
          <Avatar alt='avatar' src={user?.photoURL} />
          <S.Name>{user?.displayName}</S.Name>
        </S.UserInfo>
        <S.LogoutButton onClick={handleSignOut}>
          <Icon.LogoutCircleLine />
        </S.LogoutButton>
      </S.UserSection>
      <TextInput
        placeholder='Search'
        startIcon={Icon.SearchLine}
        value={search}
        onChange={handleChange}
      />
    </S.Header>
  );
};
