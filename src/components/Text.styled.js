import styled from 'styled-components';

export const Text = styled.p`
    color: ${props => props.color || 'inherit'};
    line-height: ${props => props.lineHeight};
    font-weight: ${props => props.fontWeight};
    font-style: ${props => props.fontStyle};
    max-width: ${props => props.maxWidth || '30rem'};
    text-align: ${props => props.textAlign};
    white-space: ${props => props.whiteSpace || 'normal'};
`;