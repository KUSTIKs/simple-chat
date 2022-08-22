import { RandomMessage } from '@simple-chat/types';

class RandomMessageService {
  async getOne() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data: RandomMessage = await response.json();
    return data;
  }
}

export const randomMessageService = new RandomMessageService();
