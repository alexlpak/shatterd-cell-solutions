import styled from 'styled-components';

export const Heading = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
`;