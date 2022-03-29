import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    padding: ${props => props.padding || '2rem'};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    & > * {
        max-width: 50rem;
    };
`;