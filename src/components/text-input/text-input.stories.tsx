import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { Icon } from '../icon';

import { TextInput } from './text-input';

export default {
  title: 'Common/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStoryFn<typeof TextInput> = (args) => {
  return (
    <TextInput
      maxWidth={600}
      {...args}
      startIcon={Icon.SearchLine}
      endIcon={undefined}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'default',
};
