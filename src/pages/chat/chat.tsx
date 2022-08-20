import { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Header, MessageInput } from '@simple-chat/widgets';
import { QueryKey } from '@simple-chat/enums';
import { ChatsService } from '@simple-chat/services';
import { getFullName } from '@simple-chat/utils';
import { Message } from '@simple-chat/components';

import * as S from './chat.style';

export const ChatPage: FC = () => {
  const messageListRef = useRef<HTMLUListElement>(null);
  const { chatId } = useParams();
  const { data: chat } = useQuery([QueryKey.CHATS, chatId], () =>
    ChatsService.getById(chatId)
  );

  useEffect(() => {
    const messageList = messageListRef.current;
    if (!messageList) return;
    messageList.scrollTo(0, messageList.scrollHeight);
  }, [chat, messageListRef]);

  if (!chat) {
    return null;
  }

  const lastTimeOnline = chat.interlocutor.isOnline
    ? null
    : new Date(chat.interlocutor.lastTimeOnlineAt);
  const interlocutorName = getFullName(chat.interlocutor);

  return (
    <S.Wrapper>
      <Header
        avatarSrc={chat.interlocutor.avatarUrl}
        lastTimeOnline={lastTimeOnline}
        name={interlocutorName}
      />
      <S.MessageList ref={messageListRef}>
        {chat.messages.map(({ id, content, createdAt, isYours }) => (
          <Message
            key={id}
            content={content}
            date={new Date(createdAt)}
            name={isYours ? 'Artem Khvostyk' : interlocutorName}
            avatarSrc={isYours ? undefined : chat.interlocutor.avatarUrl}
            direction={isYours ? 'rtl' : 'ltr'}
            noAvatar={isYours}
            variant={isYours ? 'light' : 'dark'}
          />
        ))}
      </S.MessageList>
      <MessageInput />
    </S.Wrapper>
  );
};
