import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { ChatItem } from '@simple-chat/components';
import { getFullName } from '@simple-chat/utils';
import { useAppSelector } from '@simple-chat/hooks';
import { QueryKey } from '@simple-chat/enums';
import { ChatsService } from '@simple-chat/services';

import { Section } from '../section';

import * as S from './chats-section.style';

export const ChatsSection: FC = () => {
  const { search } = useAppSelector((state) => state.app);
  const { data: chats } = useQuery(
    [QueryKey.CHATS, { query: { q: search } }],
    () => ChatsService.getAll({ query: { q: search } })
  );
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
