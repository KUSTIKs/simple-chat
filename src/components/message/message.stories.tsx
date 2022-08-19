import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { Message } from './message';
import { MessageDirection, MessageVariant } from './message.types';

export default {
  title: 'Common/Message',
  component: Message,
  argTypes: {
    variant: {
      options: ['dark', 'light'] as MessageVariant[],
      control: {
        type: 'radio',
      },
    },
    direction: {
      options: ['ltr', 'rtl'] as MessageDirection[],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Message>;

const Template: ComponentStoryFn<typeof Message> = (args) => {
  return <Message {...args} />;
};

export const OthersMessage = Template.bind({});
OthersMessage.args = {
  avatarSrc:
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  content: 'Laborum mollit quis fugiat exercitation nostrud qui.',
  date: new Date(),
  name: 'Hunter Snyder',
};

export const MyMessage = Template.bind({});
MyMessage.args = {
  avatarSrc:
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  content: 'Laborum mollit quis fugiat exercitation nostrud qui.',
  date: new Date(),
  name: 'Hunter Snyder',
  direction: 'rtl',
  noAvatar: true,
  variant: 'light',
};
