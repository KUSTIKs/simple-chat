import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Avatar } from './avatar';
import { AvatarSize } from './avatar.types';

export default {
  title: 'Common/Avatar',
  component: Avatar,
  args: {
    alt: 'avatar',
  },
  argTypes: {
    size: {
      options: ['m', 's'] as AvatarSize[],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStoryObj<typeof Avatar> = {
  name: 'Default',
  args: {
    size: 'm',
    src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
};

export const NoImage: ComponentStoryObj<typeof Avatar> = {
  name: 'No Image',
  args: {
    size: 'm',
  },
};
