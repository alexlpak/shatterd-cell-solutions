import styled from 'styled-components';

export const Heading = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${({ $color }) => $color};
    text-align: ${({ $textAlign }) => $textAlign};
    white-space: ${({ $whiteSpace }) => $whiteSpace};
`;