import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Image = styled(motion.img)`
    height: ${({ $height }) => $height};
    width: ${({ $width }) => $width};
`;