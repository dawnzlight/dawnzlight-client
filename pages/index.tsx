import { NextPage } from 'next';
import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import * as headerAnimationData from '../public/lottie/header-dawnzlight.json';
import * as keyPhraseAnimationData from '../public/lottie/key-phrase.json';
import * as openingAnimationData from '../public/lottie/opening.json';
import * as menuInfoAnimationData from '../public/lottie/menu-info.json';
import * as menuMemberAnimationData from '../public/lottie/menu-member.json';
import * as menuTechBlogAnimationData from '../public/lottie/menu-tech-blog.json';

import { Box, Flex, Spacer, Text, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import LottieButton from '@/Component/Atoms/LottieButton';
import AnimationPageTemplate from '@/Component/Templates/AnimationPageTemplate';
import DelayComponent from '@/Component/Atoms/DelayComponent';

const SampleSketch = dynamic(() => import('@/Component/Atoms/SampleSketch'), { ssr: false });
const LottieAnimation = dynamic(() => import('@/Component/Atoms/LottieAnimation'), { ssr: false });

const Index: NextPage = () => {
    const [showMainContent, setShowMainContent] = useState(false);

    const handleAnimationComplete = () => {
        setShowMainContent(true);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {!showMainContent && (
                // 背景の色を指定
                <Flex
                    justifyContent='center'
                    alignItems='center'
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#202020',
                    }}
                >
                    <LottieAnimation
                        animationData={openingAnimationData}
                        width={800}
                        height={300}
                        delay={0}
                        onComplete={handleAnimationComplete}
                    />
                </Flex>
            )}
            {showMainContent && (
                <AnimationPageTemplate>
                    <LottieAnimation
                        animationData={headerAnimationData}
                        width={400}
                        height={150}
                        delay={100}
                    />
                    <Flex>
                        <LottieAnimation
                            animationData={keyPhraseAnimationData}
                            width={800}
                            height={400}
                            delay={2500}
                        />
                        <Spacer />
                        <Box pr={20}>
                            <LottieButton
                                animationData={menuInfoAnimationData}
                                width={400}
                                height={100}
                                delay={2500}
                                path='/info'
                            />
                            <LottieButton
                                animationData={menuMemberAnimationData}
                                width={400}
                                height={100}
                                delay={2600}
                                path='/member'
                            />
                            <LottieButton
                                animationData={menuTechBlogAnimationData}
                                width={400}
                                height={100}
                                delay={2700}
                                path='/tech-blog'
                            />
                        </Box>
                    </Flex>
                    <DelayComponent delay={3000}>
                        <Text color={'white'} fontSize={'3xl'}>
                            Projects
                        </Text>
                    </DelayComponent>
                </AnimationPageTemplate>
            )}
        </div>
    );
};

export default Index;
