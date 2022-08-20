import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { Spinner } from './spinner';

export default {
  title: 'Common/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStoryFn<typeof Spinner> = (args) => {
  return <Spinner {...args} />;
};

export const Default = Template.bind({});
