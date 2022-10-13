import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './index';

export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    size: {
        options: ['huge', 'large', 'medium', 'small', 'x-small'],
        control: { type: 'inline-radio' }
    },
    type: {
      options: ['title', 'text'],
      control: { type: 'inline-radio' }
    },
    weight: {
      options: ['light', 'normal', 'bold'],
      control: { type: 'inline-radio' }
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  type: 'title',
  weight: 'normal',
  children: 'Test'
};