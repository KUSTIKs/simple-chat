import { User } from '@simple-chat/types';
import { appFetch } from '@simple-chat/utils';

export class UsersService {
  static async getById(id: string) {
    const user = await appFetch<User>({ resource: `users/${id}` });

    return user;
  }

  static async getCurrent() {
    const user = await appFetch<User>({ resource: `currentUser` });

    return user;
  }
}
