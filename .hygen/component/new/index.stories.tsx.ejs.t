---
to: <%= abs_path %>/index.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';

import { <%= component_name %> } from ".";

const meta: Meta<typeof <%= component_name %>> = {
    component: <%= component_name %>,
    tags: ['autodocs'],
};

export default meta
type Story = StoryObj<typeof <%= component_name %>>;

export const Sample: Story = {
    args: {}
}