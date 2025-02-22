import { NextPage } from 'next';

import AnimationPageTemplate from '@/Component/Templates/AnimationPageTemplate';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import * as memberHeaderAnimationData from '../public/lottie/member.json';
import LottieAnimation from '@/Component/Atoms/LottieAnimation';
import DiagonalDivider from '@/Component/Atoms/DiagonalDivider';
import MemberCard from '@/Component/Molecules/MemberCard';

import React from 'react';
import DelayComponent from '@/Component/Atoms/DelayComponent';

import { MEMBERS } from '@/Data/members';

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
            <LottieAnimation
                animationData={memberHeaderAnimationData}
                width={400}
                height={150}
                delay={100}
            />
            <Box>
                <Flex
                    justifyContent='right'
                    style={{
                        position: 'relative',
                    }}
                >
                    <Box
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            paddingTop: '100px',
                            paddingRight: '150px',
                        }}
                    >
                        <DelayComponent delay={1500}>
                            <Text color={'white'} fontSize={'4xl'}>
                                Dawn’z Lightのメンバー紹介
                            </Text>
                        </DelayComponent>
                    </Box>
                </Flex>
            </Box>
            {MEMBERS.map((member, index) => {
                return (
                    <MemberCard
                        name={member.name}
                        iconPath={member.src}
                        extarnalLinks={member.externalLinks}
                    />
                );
            })}
        </AnimationPageTemplate>
    );
};

export default Index;
