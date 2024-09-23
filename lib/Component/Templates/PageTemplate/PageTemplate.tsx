import React, { memo } from 'react';
import Styled from './style.module.scss';
// import {} from './const';
import { Props } from './type';

import { Header } from '@/Component/Organisms/Header';
import { Footer } from '@/Component/Organisms/Footer';

import { Box } from '@chakra-ui/react';

export const PageTemplate: React.FC<Props> = memo((props) => {
    return (
        <div>
            <Header />
            <Box className={Styled.body} m={5}>
                {props.children}
            </Box>
            <Footer />
        </div>
    );
});

PageTemplate.displayName = 'PAGETEMPLATE';
