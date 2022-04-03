import styled from 'styled-components';
import { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Flex = styled(motion.div)`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    flex-grow: ${props => props.flexGrow || '0'};
    flex-basis: ${props => props.flexBasis || 'auto'};
    flex-shrink: ${props => props.flexShrink || '1'};
    flex-wrap: ${props => props.flexWrap || 'nowrap'};
    flex: ${props => props.flex || '0 1 auto'};
    align-items: ${props => props.alignItems || 'stretch'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    max-width: ${props => props.maxWidth || 'none'};
    & > * {
        max-height: ${props => props.childMaxHeight};
        max-width: ${props => props.childMaxWidth};
    };
    & > *:not(:last-child) {
        ${props => {
            if (props.gap) {
                switch (props.flexDirection) {
                    case 'column': return css`margin-bottom: ${props.gap};`;
                    case 'row': return css`margin-right: ${props.gap};`;
                    default: return css`margin-right: ${props.gap};`;
                };
            };
        }}
    };
`;