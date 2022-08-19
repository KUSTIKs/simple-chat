import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { Sidebar } from './sidebar';

export default {
  title: 'Widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStoryFn<typeof Sidebar> = (args) => {
  return <Sidebar {...args} />;
};

export const Default = Template.bind({});
