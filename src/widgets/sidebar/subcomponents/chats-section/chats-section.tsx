import { FC } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { ChatItem } from '@simple-chat/components';
import { QueryKey } from '@simple-chat/enums';
import { ChatsService } from '@simple-chat/services';
import { getFullName } from '@simple-chat/utils';

import { Section } from '../section';

import * as S from './chats-section.style';

export const ChatsSection: FC = () => {
  const { data: chats } = useQuery([QueryKey.CHATS], ChatsService.getAll);
  const navigate = useNavigate();

  const navigateToChat = (id: string) => () => {
    navigate(`/${id}`);
  };

  return (
    <Section title='Chats'>
      <S.ChatsList>
        {chats?.map((chat) => (
          <ChatItem
            key={chat.id}
            avatarSrc={chat.interlocutor.avatarUrl}
            name={getFullName(chat.interlocutor)}
            date={new Date(chat.messages.at(-1)!.createdAt)}
            message={chat.messages.at(-1)!.content}
            onClick={navigateToChat(chat.id)}
            isOnline={chat.interlocutor.isOnline}
          />
        ))}
      </S.ChatsList>
    </Section>
  );
};
