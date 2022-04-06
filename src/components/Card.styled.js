import styled from 'styled-components';
import { Flex } from './Flex.styled';

export const Card = styled(Flex).attrs(({ $padding }) => ({
    $flexDirection: 'column',
    $gap: '1rem',
    $padding: $padding || '1rem'
}))`
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    border-radius: .5rem;
    border: ${({ $border }) => $border};
    max-width: ${({ $maxWidth }) => $maxWidth};
    margin: ${({ $margin }) => $margin};
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
`;