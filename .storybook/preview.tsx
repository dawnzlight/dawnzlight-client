import '@/Styles/global.module.scss';
import { NOtO_SANS_JP_FONTS } from '../font';
import React from 'react';
import type { Preview } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

const preview: Preview = {
    decorators: [
        (Story) => (
            <ChakraProvider>
                <main className={NOtO_SANS_JP_FONTS.className}>
                    <Story />
                </main>
            </ChakraProvider>
        ),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
