import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Flex = styled(motion.div)`
    display: flex;
    position: ${({ $position }) => $position};
    flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
    flex-grow: ${({ $flexGrow }) => $flexGrow || '0'};
    flex-basis: ${({ $flexBasis }) => $flexBasis || 'auto'};
    flex-shrink: ${({ $flexShrink }) => $flexShrink || '1'};
    flex-wrap: ${({ $flexWrap }) => $flexWrap || 'wrap'};
    flex: ${({ $flex }) => $flex || '0 1 auto'};
    align-items: ${({ $alignItems }) => $alignItems || 'stretch'};
    justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
    margin: ${({ $margin }) => $margin || '0'};
    padding: ${({ $padding }) => $padding || '0'};
    width: ${({ $width }) => $width || 'auto'};
    height: ${({ $height }) => $height || 'auto'};
    max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
    gap: ${({ $gap }) => $gap};
    & > * {
        max-height: ${({ $childMaxHeight }) => $childMaxHeight};
        max-width: ${({ $childMaxWidth }) => $childMaxWidth};
    };
`;