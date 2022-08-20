import { appFetch, getFullName } from '@simple-chat/utils';
import { Chat, Message } from '@simple-chat/types';

import { UsersService } from '../users/users.service';

export class ChatsService {
  static async getAll({
    query,
  }: {
    query?: Record<string, unknown> & {
      q?: string;
    };
  } = {}) {
    const chats = await appFetch<Chat[]>({
      resource: 'chats',
    });

    const chatsWithFullInfo = await Promise.all(
      chats.map((chat) => ChatsService.getFullChatInfo(chat))
    );

    const filteredChatsWithFullInfo = chatsWithFullInfo
      .filter((chat) => chat.messages.length > 0)
      .filter(({ interlocutor }) => {
        if (!query?.q) return true;

        return getFullName(interlocutor)
          .toLowerCase()
          .includes(query.q.toLowerCase());
      });

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
