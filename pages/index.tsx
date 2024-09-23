import { NextPage } from 'next';

import { PageTemplate } from '@/Component/Templates/PageTemplate';
import { MemberCardList } from '@/Component/Organisms/MemberCardList';

import { Box, Text } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

const Index: NextPage = () => {
    return (
        <PageTemplate>
            <Box p={5} borderRadius={'10px'} bg={'rgba(225,90,40,0.4)'}>
                <Box pl={5} borderLeft={'5px solid white'}>
                    <Text color={'white'} fontSize={'4xl'}>
                        Dawn'z Light
                    </Text>
                </Box>
                <Box mt={2} mb={2}>
                    <Text color={'white'} fontSize={'xl'}>
                        ゲームを世に届ける。
                    </Text>
                    <Text color={'white'} fontSize={'xl'}>
                        そんな思いをもとに結成されたチームです。そんなサイトの目的は二つ。
                    </Text>
                </Box>
                <Box mt={5} mb={5}>
                    <Text color={'white'} fontSize={'2xl'}>
                        私たちのゲームを届ける
                    </Text>
                    <Text color={'white'} fontSize={'2xl'}>
                        ゲーム作成のノウハウを届ける
                    </Text>
                </Box>
                <Box mt={5} mb={5}>
                    <Text color={'white'} fontSize={'xl'}>
                        私たちは作成したゲームだけではなく、ゲームを作ることも楽しんでもらえることを願っています。
                    </Text>
                </Box>
            </Box>
            <Grid mt={5} templateColumns='repeat(10, 1fr)' gap={6}>
                <GridItem p={5} borderRadius={'10px'} colSpan={7} bg={'rgba(225,90,40,0.4)'}>
                    <Box pl={5} borderLeft={'5px solid white'}>
                        <Text color={'white'} fontSize={'4xl'}>
                            メンバー
                        </Text>
                    </Box>
                    <MemberCardList />
                </GridItem>
                <GridItem p={5} borderRadius={'10px'} colSpan={3} bg={'rgba(225,90,40,0.4)'}>
                    <Box pl={5} borderLeft={'5px solid white'}>
                        <Text color={'white'} fontSize={'2xl'}>
                            お知らせ
                        </Text>
                    </Box>
                </GridItem>
                <GridItem p={5} borderRadius={'10px'} colSpan={7} bg={'rgba(225,90,40,0.4)'}>
                    <Box pl={5} borderLeft={'5px solid white'}>
                        <Text color={'white'} fontSize={'4xl'}>
                            プロジェクト
                        </Text>
                    </Box>
                </GridItem>
            </Grid>
        </PageTemplate>
    );
};

export default Index;
