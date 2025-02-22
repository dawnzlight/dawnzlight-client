import React from 'react';
import { Box } from '@chakra-ui/react';
import Styled from './styles/divider.module.scss'; // Import the CSS file

interface Props {
    degree: number;
}

const DiagonalDivider: React.FC<Props> = ({ degree }) => {
    return <Box className={Styled.diagonal_divider} />;
};

export default DiagonalDivider;
