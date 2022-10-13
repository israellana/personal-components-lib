import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    size: {
        options: ['huge', 'large', 'medium', 'small'],
        control: { type: 'inline-radio' }
    }
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  children: 'Teste'
};