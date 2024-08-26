import React, { memo } from 'react';
import { Avatar } from '@chakra-ui/react';
import { Props } from './type';

export const AvatarIcon: React.FC<Props> = memo(
    ({ name, iconPath, size = 'md', bg = 'gray', ...props }) => {
        return <Avatar name={name} src={iconPath} size={size} bg={bg} {...props} />;
    },
);

AvatarIcon.displayName = 'AVATARICON';
