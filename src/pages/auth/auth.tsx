import { FC } from 'react';
import { useMutation } from 'react-query';

import { Button } from '@simple-chat/components';
import { QueryKey } from '@simple-chat/enums';
import { usersService } from '@simple-chat/services';

import * as S from './auth.style';

export const AuthPage: FC = () => {
  const { mutate: signIn } = useMutation([QueryKey.USERS], () =>
    usersService.signIn()
  );

  const handleSignIn = () => {
    signIn();
  };

  return (
    <S.Wrapper>
      <S.Title>Simple Chat</S.Title>
      <Button onClick={handleSignIn}>Sign in with google</Button>
    </S.Wrapper>
  );
};
