import '@/Styles/global.module.scss';
import { NOtO_SANS_JP_FONTS } from '../font';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'jotai';

import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

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
                <main className={NOtO_SANS_JP_FONTS.className}>
                    <Component {...pageProps} />
                </main>
            </ChakraProvider>
        </Provider>
    );
}
