import styled, { css } from 'styled-components';

export const Button = styled.button`
    ${props => {
        if (props.primary) return css`
            background-color: ${props.theme.colors.primary};
            color: white;
        `;
        else if (props.secondary) return css`
            background-color: ${props.theme.colors.lightGray};
            color: black;
        `;
    }};
    border: none;
    border-radius: .5rem;
    font-weight: 600;
    padding: .5rem 1rem;
    &:hover {
        cursor: pointer;
        &:disabled {
            cursor: not-allowed;
        };
    };
`;