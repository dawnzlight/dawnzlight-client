import type { Meta, StoryObj } from '@storybook/react';

import { AllYouCanDrinkCard } from '.';

const meta: Meta<typeof AllYouCanDrinkCard> = {
    component: AllYouCanDrinkCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AllYouCanDrinkCard>;

export const Sample: Story = {
    args: {},
};
