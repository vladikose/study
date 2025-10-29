import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const FullText = Template.bind({});
FullText.args = {
    title: 'Title lorem ipsum',
    text: 'text lorem ipsum',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'text lorem ipsum',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'Title lorem ipsum',
    text: 'text lorem ipsum',
    theme: TextTheme.ERROR,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsum',
    text: 'text lorem ipsum',
    size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsum',
    text: 'text lorem ipsum',
    size: TextSize.L,
};
