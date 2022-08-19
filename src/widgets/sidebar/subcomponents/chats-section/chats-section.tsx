import { FC } from 'react';

import { ChatItem } from '@simple-chat/components';

import { Section } from '../section';

import * as S from './chats-section.style';

export const ChatsSection: FC = () => {
  return (
    <Section title='Chats'>
      <S.ChatsList>
        <ChatItem
          avatarSrc='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          date={new Date()}
          message='Laborum ea excepteur esse officia cillum culpa velit. Eu sunt adipisicing dolore tempor nisi nisi laborum nostrud officia deserunt. Aliquip nostrud aute dolor esse nostrud.'
          name='Hester Webb'
        />
        <S.Separator />
        <ChatItem
          avatarSrc='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          date={new Date()}
          message='Laborum ea excepteur esse officia cillum culpa velit. Eu sunt adipisicing dolore tempor nisi nisi laborum nostrud officia deserunt. Aliquip nostrud aute dolor esse nostrud.'
          name='Hester Webb'
        />
        <S.Separator />
        <ChatItem
          avatarSrc='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          date={new Date()}
          message='Laborum ea excepteur esse officia cillum culpa velit. Eu sunt adipisicing dolore tempor nisi nisi laborum nostrud officia deserunt. Aliquip nostrud aute dolor esse nostrud.'
          name='Hester Webb'
        />
        <S.Separator />
        <ChatItem
          avatarSrc='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          date={new Date()}
          message='Laborum ea excepteur esse officia cillum culpa velit. Eu sunt adipisicing dolore tempor nisi nisi laborum nostrud officia deserunt. Aliquip nostrud aute dolor esse nostrud.'
          name='Hester Webb'
        />
      </S.ChatsList>
    </Section>
  );
};
