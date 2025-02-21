import React, { memo } from 'react';
import dynamic from 'next/dynamic';

import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const SampleSketch = dynamic(() => import('@/Component/Atoms/SampleSketch'), { ssr: false });

interface Props {
    children: React.ReactNode;
}

const AnimationPageTemplate: React.FC<Props> = memo((props) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
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
                    {props.children}
                </Box>
            </motion.div>
        </div>
    );
});

AnimationPageTemplate.displayName = 'AnimationPageTemplate';

export default AnimationPageTemplate;
