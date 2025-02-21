import { NextPage } from 'next';

import AnimationPageTemplate from '@/Component/Templates/AnimationPageTemplate';
import { Box, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const Index: NextPage = () => {
    return (
        <AnimationPageTemplate>
            <NextSeo
                title={'メンバー'}
                description={"Dawn'z Lightのメンバー紹介です"}
                openGraph={{
                    title: 'メンバー',
                    description: "Dawn'z Lightのメンバー紹介です",
                }}
            />
            <Box>
                <Text color={'white'}>メンバー</Text>
            </Box>
        </AnimationPageTemplate>
    );
};

export default Index;
