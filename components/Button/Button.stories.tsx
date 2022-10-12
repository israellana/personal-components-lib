import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
        options: ['huge', 'large', 'medium', 'small'],
        control: { type: 'inline-radio' }
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
  children: 'Teste'
};