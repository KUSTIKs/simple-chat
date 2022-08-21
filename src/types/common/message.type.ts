import { DocumentData, DocumentReference, Timestamp } from 'firebase/firestore';

import { Account } from './account.type';

export type DBMessage = {
  author: DocumentReference<DocumentData>;
  content: string;
  createdAt: Timestamp;
};

export type Message = {
  id: string;
  author: Account;
  content: string;
  createdAt: Timestamp;
};
