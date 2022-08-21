import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { ChatItem } from './chat-item';

export default {
  title: 'Common/ChatItem',
  component: ChatItem,
  argTypes: { date: { control: 'date' } },
} as ComponentMeta<typeof ChatItem>;

const Template: ComponentStoryFn<typeof ChatItem> = (args) => {
  const date = args.date && new Date(args.date);
  return <ChatItem {...args} date={date} />;
};

export const Default = Template.bind({});
Default.args = {
  avatarSrc:
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  message: 'Esse eiusmod culpa sit ullamco id nostrud est nulla quis sit sint.',
  name: 'Jimmy Larson',
  date: new Date(),
};
