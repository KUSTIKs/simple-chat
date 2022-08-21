import { DocumentData, DocumentReference } from 'firebase/firestore';

import { Account } from './account.type';
import { Message } from './message.type';

export type DBChat = {
  members: [DocumentReference<DocumentData>, DocumentReference<DocumentData>];
  messages: DocumentReference<DocumentData>[];
};

export type Chat = {
  id: string;
  members: [Account, Account];
  messages: Message[];
};
