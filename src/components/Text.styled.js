import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Text = styled(motion.p)`
    color: ${({ $color}) => $color || 'inherit'};
    line-height: ${({ $lineHeight}) => $lineHeight};
    font-weight: ${({ $fontWeight}) => $fontWeight};
    font-style: ${({ $fontStyle}) => $fontStyle};
    font-size: ${({ $fontSize}) => $fontSize};
    max-width: ${({ $maxWidth}) => $maxWidth || '30rem'};
    text-align: ${({ $textAlign}) => $textAlign};
    white-space: ${({ $whiteSpace}) => $whiteSpace || 'normal'};
`;