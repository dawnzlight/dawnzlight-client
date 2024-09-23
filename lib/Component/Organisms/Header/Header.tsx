import React, { memo } from 'react';
import Styled from './style.module.scss';
// import {} from './const';
import { Props } from './type';

import { Box, Flex, Text } from '@chakra-ui/react';

export const Header: React.FC<Props> = memo((props) => {
    return (
        <Flex className={Styled.header} boxShadow={'md'} p={3} bg={'white'}>
            <Text as={'b'} fontSize={'2xl'}>
                Dawn'z Light
            </Text>
        </Flex>
    );
});

Header.displayName = 'HEADER';
