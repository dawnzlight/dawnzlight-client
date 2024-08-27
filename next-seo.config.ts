import { DefaultSeoProps } from 'next-seo';

const SITE_NAME = "Dawn'z Light";

const TitleTemplate = `%s | ${SITE_NAME}`;

const config: DefaultSeoProps = {
    title: SITE_NAME,
    titleTemplate: TitleTemplate,
    defaultTitle: SITE_NAME,
    description: '',
    canonical: 'https://dawnzlight.net',
    openGraph: {
        url: 'https://dawnzlight.net',
        title: SITE_NAME,
        description: '',
        siteName: SITE_NAME,
    },
};

export default config;
