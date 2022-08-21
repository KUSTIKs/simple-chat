import { FC, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@root/firebaseconfig';

import { ChatItem, Icon } from '@simple-chat/components';
import { chatsService, usersService } from '@simple-chat/services';
import { useAppSelector, useDoc } from '@simple-chat/hooks';
import { AppError } from '@simple-chat/utils';

import { Section } from '../section';

import * as S from './chats-section.style';

export const ChatsSection: FC = () => {
  const [user] = useAuthState(auth);
  const { search } = useAppSelector((state) => state.app);
  const getChats = useCallback(() => {
    return chatsService.getAll({
      q: search,
    });
  }, [search]);
  const useDocDependencies = useMemo(
    () => [usersService.collectionRef, chatsService.collectionRef],
    []
  );
  const chats = useDoc({
    handler: getChats,
    dependencies: useDocDependencies,
  });
  const navigate = useNavigate();

  const navigateToChat = (id: string) => () => {
    navigate(`/${id}`);
  };

  const startCreatingChat = async () => {
    const email = prompt('Enter email of your interlocutor');
    if (!email) return;
    try {
      await chatsService.create({
        interlocutorEmail: email,
      });
    } catch (err) {
      if (err instanceof AppError) {
        return alert(err.message);
      }
      throw err;
    }
  };

  return (
    <Section
      title='Chats'
      actions={
        <S.ActionButton onClick={startCreatingChat}>
          <Icon.AddLine />
        </S.ActionButton>
      }
    >
      <S.ChatsList>
        {chats?.map((chat) => {
          const interlocutor = chat.members.find(
            (member) => member.id !== user!.uid
          )!;
          const lastMessage = chat.messages.at(-1);

          return (
            <ChatItem
              key={chat.id}
              avatarSrc={interlocutor.avatarUrl}
              name={interlocutor.name}
              date={lastMessage && lastMessage.createdAt.toDate()}
              message={lastMessage && lastMessage.content}
              onClick={navigateToChat(chat.id)}
              isOnline={interlocutor.isOnline}
            />
          );
        })}
      </S.ChatsList>
    </Section>
  );
};
