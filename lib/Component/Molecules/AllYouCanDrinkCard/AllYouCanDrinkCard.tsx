import React, { memo } from 'react';
import Styled from './style.module.scss';
// import {} from './const';
import { Props } from './type';
import Link from 'next/link';

import { Box, Flex, Text, Icon, Collapse } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import { FaAngleRight, FaAngleDown } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

export const AllYouCanDrinkCard: React.FC<Props> = memo((props) => {
    const { isOpen: isOpenUse, onToggle: onToggleUse } = useDisclosure();
    const { isOpen: isOpenRecipe, onToggle: onToggleRecipe } = useDisclosure();

    return (
        <Card>
            <CardBody>
                <Flex justifyContent={'center'}>
                    <Text as={'b'} fontSize={'4xl'}>
                        All You Can Drink Mod
                    </Text>
                </Flex>
                <Flex justifyContent={'center'}>
                    <Text>こんにちは</Text>
                </Flex>
                <Flex justifyContent={'center'} gap={5} mt={10}>
                    <Box className={Styled.link}>
                        <Link href={'#'}>
                            <Text>
                                ダウンロード
                                <Icon ml={1} as={FiExternalLink} />
                            </Text>
                        </Link>
                    </Box>
                    <Flex
                        className={Styled.link}
                        alignItems={'center'}
                        h={'24px'}
                        onClick={onToggleUse}
                    >
                        <Icon ml={1} as={isOpenUse ? FaAngleDown : FaAngleRight} />
                        <Text>使い方</Text>
                    </Flex>
                    <Flex
                        className={Styled.link}
                        alignItems={'center'}
                        h={'24px'}
                        onClick={onToggleRecipe}
                    >
                        <Icon ml={1} as={isOpenRecipe ? FaAngleDown : FaAngleRight} />
                        <Text>レシピ一覧</Text>
                    </Flex>
                </Flex>
                <Collapse in={isOpenUse} animateOpacity>
                    <Text>あいうえお</Text>
                </Collapse>
            </CardBody>
        </Card>
    );
});

AllYouCanDrinkCard.displayName = 'ALLYOUCANDRINKCARD';
