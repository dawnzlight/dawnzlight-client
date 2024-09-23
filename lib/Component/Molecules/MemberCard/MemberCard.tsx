import React, { memo } from 'react';
import Styled from './style.module.scss';
import { Props } from './type';

import { Box, Flex, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { ExternalIcon } from '@/Component/Atoms/ExternalIcon';
import Link from 'next/link';

export const MemberCard: React.FC<Props> = memo((props) => {
    return (
        <Card className={Styled.card} p={0} mt={5} mb={5}>
            <CardBody className={Styled.card_body} p={0} m={0}>
                <Image className={Styled.card_image} src={props.bg} />
                <Box className={Styled.card_main}>
                    <Flex justifyContent={'center'}>
                        <Avatar
                            className={Styled.card_avator}
                            size='md'
                            border={'2px solid white'}
                            src={props.avatar}
                        />
                    </Flex>
                    <Box className={Styled.card_text}>
                        <Flex justifyContent={'center'}>
                            <Text fontSize={'4xl'}>{props.name}</Text>
                        </Flex>
                        <Flex justifyContent={'center'}>
                            <Text>{props.description}</Text>
                        </Flex>
                    </Box>
                </Box>
                <Flex className={Styled.card_sns} width={'100%'} justifyContent={'center'} gap={2}>
                    <Link href={`/members/${props.name}`}>
                        <Text className={Styled.link}>{props.name}の詳細へ</Text>
                    </Link>
                    {props.sns &&
                        props.sns.map((s, index) => {
                            return <ExternalIcon key={index} url={s.url} category={s.category} />;
                        })}
                </Flex>
            </CardBody>
        </Card>
    );
});

MemberCard.displayName = 'MEMBERCARD';
