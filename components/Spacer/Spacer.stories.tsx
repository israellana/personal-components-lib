import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spacer } from './index';

export default {
  title: 'Example/Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => <div className="border-primary-300 border-2"><Spacer {...args} /></div>;

export const Default = Template.bind({});

Default.args = {
  size: '',
  type: '',
};