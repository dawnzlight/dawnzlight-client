import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import AnimationPageTemplate from '@/Component/Templates/AnimationPageTemplate';
import { Box, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const Index: NextPage = () => {
    return (
        <AnimationPageTemplate>
            <NextSeo
                title={'Info'}
                description={'基本情報'}
                openGraph={{
                    title: 'Info',
                    description: '基本情報',
                }}
            />
            <Box>
                <Text color={'white'}>Info</Text>
            </Box>
        </AnimationPageTemplate>
    );
};

export default Index;
