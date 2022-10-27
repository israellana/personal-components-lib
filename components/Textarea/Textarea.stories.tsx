import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Textarea from './index';

export default {
  title: 'Example/Textarea',
  component: Textarea,
  argTypes: {
    scale: {
      options: ['medium', 'small'],
      control: { type: 'inline-radio' }
    },
    full: { control: 'boolean' },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});

Default.args = {
  scale: 'medium',
  full: false,
  hint: '',
  label: ''
};