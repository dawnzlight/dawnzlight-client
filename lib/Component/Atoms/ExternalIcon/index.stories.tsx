import type { Meta, StoryObj } from '@storybook/react';

import { ExternalIcon } from '.';

const meta: Meta<typeof ExternalIcon> = {
    component: ExternalIcon,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExternalIcon>;

export const Discord: Story = {
    args: {
        category: 'discord',
    },
};
