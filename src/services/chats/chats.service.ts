import { appFetch } from '@simple-chat/utils';
import { Chat, Message } from '@simple-chat/types';

import { UsersService } from '../users/users.service';

export class ChatsService {
  static async getAll() {
    const chats = await appFetch<Chat[]>({
      resource: 'chats',
    });

    const chatsWithFullInfo = await Promise.all(
      chats.map(ChatsService.getFullChatInfo)
    );

    const filteredChatsWithFullInfo = chatsWithFullInfo.filter(
      (chat) => chat.messages.length > 0
    );

    return filteredChatsWithFullInfo;
  }

  static async getById(id: unknown) {
    const chat = await appFetch<Chat>({
      resource: `chats/${id}`,
    });

    const fullChatInfo = await ChatsService.getFullChatInfo(chat);

    return fullChatInfo;
  }

  static async getFullChatInfo(chat: Chat) {
    const interlocutor = await UsersService.getById(chat.interlocutorId);
    const messages = await appFetch<Message[]>({
      resource: `messages`,
      query: {
        id: chat.messageIds,
        _sort: 'createdAt',
      },
    });

    return {
      ...chat,
      interlocutor,
      messages,
    };
  }
}
