import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='ja'>
            <Head lang='ja' prefix='og: http://ogp.me/ns#'>
                <link rel='icon' href='/favicon.png' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
