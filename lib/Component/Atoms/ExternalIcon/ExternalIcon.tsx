import React, { memo } from 'react';
import { Props } from './type';

import Link from 'next/link';
import { Box, Icon } from '@chakra-ui/react';

import {
    AiFillFacebook,
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube,
} from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { SiQiita, SiZenn } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

export const ExternalIcon: React.FC<Props> = memo(
    ({ category, size = 7, color = 'gray', subColor = 'black', url = '#', ...props }) => {
        let icon: any;

        switch (category) {
            case 'discord':
                icon = BsDiscord;
                break;
            case 'facebook':
                icon = AiFillFacebook;
                break;
            case 'github':
                icon = AiFillGithub;
                break;
            case 'instagram':
                icon = AiFillInstagram;
                break;
            case 'linkdin':
                icon = AiFillLinkedin;
                break;
            case 'qiita':
                icon = SiQiita;
                break;
            case 'x':
                icon = FaXTwitter;
                size = 6;
                break;
            case 'youtube':
                icon = AiFillYoutube;
                break;
            case 'zenn':
                icon = SiZenn;
                size = 6;
                break;
        }

        return (
            <Link href={url} rel='noopener noreferrer' target='_blank'>
                <Icon
                    as={icon}
                    boxSize={size}
                    color={color}
                    _hover={{ color: subColor }}
                    {...props}
                />
            </Link>
        );
    },
);

ExternalIcon.displayName = 'EXTERNALICON';
