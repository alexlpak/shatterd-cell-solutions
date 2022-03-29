import styled from 'styled-components';
import { Flex } from './Flex.styled';

export const Card = styled(Flex).attrs(props => ({
    flexDirection: 'column',
    gap: '1rem',
    padding: props.padding || '1rem'
}))`
    background-color: ${props => props.backgroundColor};
    border-radius: .5rem;
    border: ${props => props.border};
    max-width: ${props => props.maxWidth};
`;