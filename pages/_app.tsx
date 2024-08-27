import '@/Styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'jotai';

import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';
import Head from 'next/head';

const themeConfig = {
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
};

export const theme = extendTheme(themeConfig);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <ChakraProvider theme={extendTheme(theme)}>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    );
}
