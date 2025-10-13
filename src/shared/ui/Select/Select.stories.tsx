import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Выпадающий список:',
    options: [
        { value: '1', content: 'первый пункт' },
        { value: '2', content: 'второй пункт' },
        { value: '3', content: 'третий пункт' },
    ],
};
