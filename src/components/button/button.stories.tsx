import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
