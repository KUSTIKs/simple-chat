import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { Header } from './header';

export default {
  title: 'Widgets/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStoryFn<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  avatarUrl:
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  lastTimeOnline: null,
  name: 'Lucile Norman',
};
