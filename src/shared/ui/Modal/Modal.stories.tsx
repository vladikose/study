import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi dolore id necessitatibus nemo quasi quisquam, sunt tempore tenetur! At consequuntur cum deserunt ex expedita ipsum, labore natus nihil unde?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi dolore id necessitatibus nemo quasi quisquam, sunt tempore tenetur! At consequuntur cum deserunt ex expedita ipsum, labore natus nihil unde?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
