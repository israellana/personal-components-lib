import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Banner } from './index';

export default {
  title: 'Example/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '',
  subtitle: '',
  actionText: '',
  action: () => null,
  color: 'green',
};