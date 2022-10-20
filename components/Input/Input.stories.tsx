import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    scale: {
      options: ['medium', 'small'],
      control: { type: 'inline-radio' }
    },
    full: { control: 'boolean' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  scale: 'medium',
  full: false,
  hint: '',
  label: ''
};