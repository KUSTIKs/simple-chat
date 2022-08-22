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
  randomMessageService,
  usersService,
} from '@simple-chat/services';
import { Message } from '@simple-chat/components';
import { useDoc } from '@simple-chat/hooks';
import { BOT_ID } from '@simple-chat/config';

import * as S from './chat-page.style';

export const ChatPage: FC = () => {
  const messageListRef = useRef<HTMLUListElement>(null);
  const { chatId } = useParams();
  const [user] = useAuthState(auth);

  const getChat = useCallback(async () => {
    if (!chatId) return null;
    try {
      return await chatsService.getById(chatId);
    } catch (err) {
      return null;
    }
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
    ({ content, authorId }: { content: string; authorId?: string }) =>
      messagesService.create({
        message: {
          content,
          authorId,
        },
        chatId: chatId!,
      })
  );

  const interlocutor = chat?.members.find((member) => member.id !== user?.uid)!;
  const isBot = interlocutor?.id === BOT_ID;

  const sendRandomMessage = useCallback(async () => {
    const { value } = await randomMessageService.getOne();
    createMessage({
      content: value,
      authorId: BOT_ID,
    });
  }, [createMessage]);

  useEffect(() => {
    if (!isBot || !chat || chat?.messages.at(-1)?.author.id === BOT_ID) return;
    sendRandomMessage();
  }, [isBot, sendRandomMessage, chat?.messages, chat]);

  useEffect(() => {
    const messageList = messageListRef.current;
    if (!messageList) return;
    messageList.scrollTo(0, messageList.scrollHeight);
  }, [chat, messageListRef]);

  if (!chat) {
    return null;
  }

  const lastTimeOnline = interlocutor.isOnline
    ? null
    : interlocutor.lastTimeOnlineAt.toDate();

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
      <MessageInput
        handleSubmit={(value) => createMessage({ content: value })}
      />
    </S.Wrapper>
  );
};
