import styled, { css } from 'styled-components';

export const Button = styled.button`
    ${props => {
        if (props.primary) {
            const { main, hover, active, disabled } = props.theme.colors.primary;
            return css`
                background-color: ${main};
                color: white;
                &:hover { background-color: ${hover} };
                &:active { background-color: ${active} };
                &:disabled { background-color: ${disabled} };
            `;
        }
        else if (props.secondary) {
            const { main, hover, active, disabled } = props.theme.colors.lightGray;
            return css`
                background-color: ${main};
                color: black;
                &:hover { background-color: ${hover} };
                &:active { background-color: ${active} };
                &:disabled { background-color: ${disabled} };
            `;
        };
    }};
    border: none;
    border-radius: .5rem;
    font-weight: 600;
    padding: .5rem 1rem;
    transition: all 150ms ease;
    &:hover {
        cursor: pointer;
    };
    &:disabled {
        &:hover {
            cursor: not-allowed;
        };
    };
`;