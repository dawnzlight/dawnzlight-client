import type { Meta, StoryObj } from '@storybook/react';

import { MemberCardList } from '.';

const meta: Meta<typeof MemberCardList> = {
    component: MemberCardList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MemberCardList>;

export const Sample: Story = {
    args: {},
};
