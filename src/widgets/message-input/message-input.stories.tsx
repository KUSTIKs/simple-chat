import { ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { MessageInput } from './message-input';

export default {
  title: 'Widgets/MessageInput',
  component: MessageInput,
} as ComponentMeta<typeof MessageInput>;

const Template: ComponentStoryFn<typeof MessageInput> = (args) => {
  return <MessageInput {...args} />;
};

export const Default = Template.bind({});
