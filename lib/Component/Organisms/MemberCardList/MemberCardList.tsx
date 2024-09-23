import React, { memo } from 'react';
import Styled from './style.module.scss';
import { MEMBER_LIST } from './const';
import { Props } from './type';

import { Box } from '@chakra-ui/react';

import { MemberCard } from '../../Molecules/MemberCard';

export const MemberCardList: React.FC<Props> = memo((props) => {
    return (
        <Box m={5}>
            {MEMBER_LIST.map((member, index) => {
                return <MemberCard key={index} {...member} />;
            })}
        </Box>
    );
});

MemberCardList.displayName = 'MEMBERCARDLIST';
