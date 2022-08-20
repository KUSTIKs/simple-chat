import { Message } from '@simple-chat/types';
import { appFetch } from '@simple-chat/utils';

export class MessagesService {
  static async getById(id: string) {
    const message = await appFetch<Message>({ resource: `messages/${id}` });
    return message;
  }
}
