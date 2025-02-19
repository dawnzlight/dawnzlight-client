import { NextPage } from 'next';
import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import * as headerAnimationData from '../public/lottie/header-dawnzlight.json';
import * as keyPhraseAnimationData from '../public/lottie/key-phrase.json';
import * as openingAnimationData from '../public/lottie/opening.json';
import { Box, Flex, Text, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
                <motion.div
                    initial={{ backgroundColor: 'rgba(32, 32, 32, 1)' }}
                    animate={{ backgroundColor: 'rgba(32, 32, 32, 0)' }}
                    transition={{ duration: 5, ease: 'easeInOut' }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <SampleSketch />
                    <Box style={{ position: 'relative', zIndex: 1 }} ml={5}>
                        <LottieAnimation
                            animationData={headerAnimationData}
                            width={400}
                            height={150}
                            delay={100}
                        />
                        <LottieAnimation
                            animationData={keyPhraseAnimationData}
                            width={800}
                            height={400}
                            delay={2500}
                        />
                    </Box>
                </motion.div>
            )}
        </div>
    );
};

export default Index;
