import { DefaultSeoProps } from 'next-seo';

const SITE_NAME = "Dawn'z Light";

const TitleTemplate = `%s | ${SITE_NAME}`;

const config: DefaultSeoProps = {
    title: SITE_NAME,
    titleTemplate: TitleTemplate,
    defaultTitle: SITE_NAME,
    description: "Welcome to Dawn'z Light",
    canonical: 'https://dawnzlight.net',
    openGraph: {
        url: 'https://dawnzlight.net',
        title: SITE_NAME,
        type: 'website',
        locale: 'ja_JP',
        description: "Welcome to Dawn'z Light",
        siteName: SITE_NAME,
        images: [
            {
                url: 'https://dawnzlight.net/dawnzlight-og-image.png',
                width: 1920,
                height: 480,
                alt: SITE_NAME,
            },
        ],
    },
};

export default config;
