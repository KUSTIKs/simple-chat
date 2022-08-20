import { FC } from 'react';
import { useMutation } from 'react-query';

import { signInWithGoogle } from '@root/firebaseconfig';

import { Button } from '@simple-chat/components';
import { QueryKey } from '@simple-chat/enums';

import * as S from './auth.style';

export const AuthPage: FC = () => {
  const { mutate: signIn } = useMutation([QueryKey.USERS], () =>
    signInWithGoogle()
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
