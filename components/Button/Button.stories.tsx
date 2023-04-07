import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['huge', 'large', 'medium', 'small'],
      control: { type: 'inline-radio' }
    },
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'inline-radio' }
    },
    color: {
      options: ['primary', 'secondary', 'green', 'orange', 'red', 'yellow', 'gray'],
      control: { type: 'inline-radio' }
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  children: 'Teste',
  full: false,
  variant: "contained",
  disabled: false,
  color: 'primary'
};