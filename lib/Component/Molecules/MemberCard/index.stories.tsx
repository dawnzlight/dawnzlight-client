import type { Meta, StoryObj } from '@storybook/react';

import { MemberCard } from '.';

const meta: Meta<typeof MemberCard> = {
    component: MemberCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MemberCard>;

export const Sample: Story = {
    args: {
        name: 'Sample Name',
        bg: '/coco9122_background.jpg',
        avatar: 'https://via.placeholder.com/400x400',
        description: 'Sample Description',
        sns: [
            {
                category: 'github',
                url: '',
            },
        ],
    },
};
