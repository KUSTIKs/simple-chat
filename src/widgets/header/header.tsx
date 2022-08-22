import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from 'styled-components';

import { Icon } from '@simple-chat/components';
import { useMediaQuery } from '@simple-chat/hooks';

import * as S from './header.style';
import { UserInfo } from './subcomponents';

type Props = {
  avatarUrl: string;
  name: string;
  lastTimeOnline: Date | null;
};

export const Header: FC<Props> = ({ avatarUrl, lastTimeOnline, name }) => {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate('/');
  };
  const isMobile = useMediaQuery(`(max-width: ${useTheme().widths.mobile})`);

  return (
    <S.Header>
      {isMobile && (
        <S.BackButton onClick={navigateToMain}>
          <Icon.ArrowLeftLine />
        </S.BackButton>
      )}
      <UserInfo
        avatarSrc={avatarUrl}
        lastTimeOnline={lastTimeOnline}
        name={name}
      />
    </S.Header>
  );
};
