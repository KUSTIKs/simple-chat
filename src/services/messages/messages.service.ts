import { Chat, Message } from '@simple-chat/types';
import { appFetch } from '@simple-chat/utils';

export class MessagesService {
  static async getById(id: string) {
    const message = await appFetch<Message>({ resource: `messages/${id}` });
    return message;
  }

  static async create({
    chatId,
    message,
  }: {
    message: Message;
    chatId: string;
  }) {
    await appFetch({
      resource: 'messages',
      method: 'post',
      body: message,
    });

    const { messageIds } = await appFetch<Chat>({
      resource: `chats/${chatId}`,
    });

    const res = await appFetch({
      resource: `chats/${chatId}`,
      method: 'PATCH',
      body: {
        messageIds: [...messageIds, Number(message.id)],
      },
    });

    console.log('CREATED', messageIds, res);
  }
}
