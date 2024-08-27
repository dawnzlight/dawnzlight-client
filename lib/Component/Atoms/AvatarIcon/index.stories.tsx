import type { Meta, StoryObj } from '@storybook/react';

import { AvatarIcon } from '.';

const meta: Meta<typeof AvatarIcon> = {
    component: AvatarIcon,
    tags: ['autodocs'],
    argTypes: {
        bg: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof AvatarIcon>;

export const NoIcon: Story = {
    args: {
        name: 'John Smith',
    },
};

export const OnlineIcon: Story = {
    args: {
        ...NoIcon.args,
        iconPath: 'https://bit.ly/dan-abramov',
    },
};
