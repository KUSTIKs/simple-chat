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
