import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    padding: ${({ $padding }) => $padding || '4rem 2rem'};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${({ $color }) => $color};
    & > * {
        max-width: ${({ $maxWidth }) => $maxWidth || '45rem'};
    };
`;