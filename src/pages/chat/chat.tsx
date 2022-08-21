import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc } from 'firebase/firestore';

import { auth } from '@root/firebaseconfig';

import { Header, MessageInput } from '@simple-chat/widgets';
import { QueryKey } from '@simple-chat/enums';
import {
  chatsService,
  messagesService,
  usersService,
} from '@simple-chat/services';
import { Message } from '@simple-chat/components';
import { useDoc } from '@simple-chat/hooks';

import * as S from './chat.style';

export const ChatPage: FC = () => {
  const messageListRef = useRef<HTMLUListElement>(null);
  const { chatId } = useParams();
  const [user] = useAuthState(auth);
  const getChat = useCallback(() => {
    return chatsService.getById(chatId!);
  }, [chatId]);
  const useDocDependencies = useMemo(
    () => [
      doc(chatsService.collectionRef, chatId!),
      usersService.collectionRef,
    ],
    [chatId]
  );
  const chat = useDoc({
    handler: getChat,
    dependencies: useDocDependencies,
  });

  const { mutate: createMessage } = useMutation(
    [QueryKey.MESSAGES],
    (content: string) =>
      messagesService.create({
        message: {
          content,
        },
        chatId: chatId!,
      })
  );

  useEffect(() => {
    const messageList = messageListRef.current;
    if (!messageList) return;
    messageList.scrollTo(0, messageList.scrollHeight);
  }, [chat, messageListRef]);

  if (!chat) {
    return null;
  }

  const interlocutor = chat!.members.find((member) => member.id !== user?.uid)!;
  const lastTimeOnline = interlocutor.isOnline
    ? null
    : interlocutor.lastTimeOnlineAt?.toDate();

  return (
    <S.Wrapper>
      <Header
        avatarUrl={interlocutor.avatarUrl}
        lastTimeOnline={lastTimeOnline}
        name={interlocutor.name}
      />
      <S.MessageList ref={messageListRef}>
        {chat.messages.map(({ id, content, createdAt, author }) => {
          const isMine = author.id === user?.uid;

          return (
            <Message
              key={id}
              content={content}
              date={createdAt.toDate()}
              name={author.name}
              avatarUrl={author.avatarUrl}
              direction={isMine ? 'rtl' : 'ltr'}
              noAvatar={isMine}
              variant={isMine ? 'light' : 'dark'}
            />
          );
        })}
      </S.MessageList>
      <MessageInput handleSubmit={createMessage} />
    </S.Wrapper>
  );
};
