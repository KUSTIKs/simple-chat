import { Timestamp } from 'firebase/firestore';

export type DBAccount = {
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  lastTimeOnlineAt: Timestamp;
  email: string;
};

export type Account = {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  lastTimeOnlineAt: Timestamp;
  email: string;
};
