import '@/Styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'jotai';

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
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    );
}
