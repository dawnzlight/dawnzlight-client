import { NextPage } from 'next';

import AnimationPageTemplate from '@/Component/Templates/AnimationPageTemplate';
import { Box, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const Index: NextPage = () => {
    return (
        <AnimationPageTemplate>
            <NextSeo
                title={'テックブログ'}
                description={'開発する上で培ったノウハウをあげていきます。'}
                openGraph={{
                    title: 'テックブログ',
                    description: '開発する上で培ったノウハウをあげていきます。',
                }}
            />
            <Box>
                <Text color={'white'}>テックブログ</Text>
            </Box>
        </AnimationPageTemplate>
    );
};

export default Index;
