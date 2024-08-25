import type { StorybookConfig } from '@storybook/nextjs';
import * as path from 'path';

const config: StorybookConfig = {
    stories: ['../lib/**/*.mdx', '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: ['../public'],
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (baseConfig) => {
        return {
            ...baseConfig,
            resolve: {
                ...baseConfig.resolve,
                alias: {
                    ...baseConfig.resolve?.alias,
                    '@': path.resolve(__dirname, '../lib/'),
                },
            },
        };
    },
};
export default config;
