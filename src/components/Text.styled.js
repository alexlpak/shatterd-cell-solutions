import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Text = styled(motion.p)`
    color: ${props => props.color || 'inherit'};
    line-height: ${props => props.lineHeight};
    font-weight: ${props => props.fontWeight};
    font-style: ${props => props.fontStyle};
    font-size: ${props => props.fontSize};
    max-width: ${props => props.maxWidth || '30rem'};
    text-align: ${props => props.textAlign};
    white-space: ${props => props.whiteSpace || 'normal'};
`;