import { Chat } from '@simple-chat/types';

export type AppState = {
  search: string;
  currentChat: Chat | null;
};
