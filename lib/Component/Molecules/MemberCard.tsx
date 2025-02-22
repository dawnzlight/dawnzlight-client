import React from 'react';
import { Avatar, Box, Flex, Grid, GridItem, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react';
import styles from './styles/member_card.module.scss';
import { ExternalIcon } from '../Atoms/ExternalIcon';
import DiagonalDivider from '../Atoms/DiagonalDivider';
import DelayComponent from '../Atoms/DelayComponent';

interface Sns {
    category:
        | 'discord'
        | 'facebook'
        | 'github'
        | 'instagram'
        | 'linkdin'
        | 'qiita'
        | 'x'
        | 'youtube'
        | 'zenn';
    url: string;
}

interface Props {
    name: string;
    iconPath?: string;
    extarnalLinks: Sns[];
}

const MemberCard: React.FC<Props> = ({ name, iconPath, extarnalLinks }) => {
    return (
        <Box mb={10}>
            <DiagonalDivider degree={10} />
            <DelayComponent delay={2000}>
                <Box style={{ position: 'relative' }}>
                    <Box className={styles.triangle} />
                    <Box className={styles.body}>
                        <Avatar size='md' border={'2px solid white'} src={iconPath} />
                        <Text color={'white'} fontSize={'4xl'}>
                            {name}
                        </Text>
                        <Wrap mt={5} spacing={5}>
                            {extarnalLinks.map((link) => {
                                if (link.category === 'zenn') {
                                    return (
                                        <WrapItem mt={2}>
                                            <ExternalIcon
                                                category='zenn'
                                                size={10}
                                                url={link.url}
                                                color='white'
                                                subColor='black'
                                            />
                                        </WrapItem>
                                    );
                                } else {
                                    return (
                                        <WrapItem>
                                            <ExternalIcon
                                                category={link.category}
                                                size={10}
                                                url={link.url}
                                                color='white'
                                                subColor='black'
                                            />
                                        </WrapItem>
                                    );
                                }
                            })}
                        </Wrap>
                    </Box>
                    <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                        <GridItem>
                            <Box>
                                <Text color={'white'} fontSize={'2xl'}>
                                    自己紹介
                                </Text>
                                <Text color={'white'} fontSize={'md'}></Text>
                            </Box>
                        </GridItem>
                        <GridItem></GridItem>
                    </Grid>
                </Box>
            </DelayComponent>
        </Box>
    );
};

export default MemberCard;
