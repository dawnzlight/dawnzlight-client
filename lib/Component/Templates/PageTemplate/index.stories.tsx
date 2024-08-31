import type { Meta, StoryObj } from '@storybook/react';

import { PageTemplate } from '.';

const meta: Meta<typeof PageTemplate> = {
    component: PageTemplate,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageTemplate>;

export const Sample: Story = {
    args: {
        children: (
            <>
                <h1>Dawn'z Light</h1>
                <p>Welcome to Dawn'z Light!</p>
                <p>All you can Drink Mod</p>
            </>
        ),
    },
};
