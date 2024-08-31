import React, { memo } from 'react';
import styled from './style.module.scss';
import { SITE_INFORMATION, CONTENTS, EXTERNAL_LINKS, UPDATE_INFORMATION } from './const';
import { Props } from './type';
import Link from 'next/link';

import { Box, Divider, Flex, Text, Icon } from '@chakra-ui/react';

import { FiExternalLink } from 'react-icons/fi';

export const Footer: React.FC<Props> = memo((props) => {
    return (
        <Box bg={'gray'} pt={5}>
            <Flex gap={20} mb={5} justifyContent={'center'}>
                <Box>
                    <Text as={'b'} fontSize={'xl'} color={'white'}>
                        {SITE_INFORMATION.name}
                    </Text>
                    {SITE_INFORMATION.category.map((category) => (
                        <Box mt={2} mb={2} ml={3} key={category.name}>
                            <Link href={category.link}>
                                <Text className={styled.footer} color={'lightgray'}>
                                    {category.name}
                                </Text>
                            </Link>
                        </Box>
                    ))}
                </Box>
                <Box>
                    <Text as={'b'} fontSize={'xl'} color={'white'}>
                        {CONTENTS.name}
                    </Text>
                    {CONTENTS.category.map((category) => (
                        <Box mt={2} mb={2} ml={3} key={category.name}>
                            <Link href={category.link}>
                                <Text className={styled.footer} color={'lightgray'}>
                                    {category.name}
                                </Text>
                            </Link>
                        </Box>
                    ))}
                </Box>
                <Box>
                    <Text as={'b'} fontSize={'xl'} color={'white'}>
                        {EXTERNAL_LINKS.name}
                    </Text>
                    {EXTERNAL_LINKS.category.map((category) => (
                        <Box mt={2} mb={2} ml={3} key={category.name}>
                            <Link href={category.link}>
                                <Text className={styled.footer} color={'lightgray'}>
                                    {category.name}
                                    <Icon ml={1} as={FiExternalLink} />
                                </Text>
                            </Link>
                        </Box>
                    ))}
                    <Text as={'b'} fontSize={'xl'} color={'white'}>
                        {UPDATE_INFORMATION.name}
                    </Text>
                    {UPDATE_INFORMATION.category.map((category) => (
                        <Box mt={2} mb={2} ml={3} key={category.name}>
                            <Link href={category.link}>
                                <Text className={styled.footer} color={'lightgray'}>
                                    {category.name}
                                </Text>
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Flex>
            <Divider />
            <Flex justifyContent={'center'} p={5}>
                <Text color={'white'}>Copyright 2024 Dawn'z Light. All rights reserved.</Text>
            </Flex>
        </Box>
    );
});

Footer.displayName = 'FOOTER';
