import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Flex } from './Flex.styled';
import { Text } from './Text.styled';

export const Button = styled.button`
    ${props => {
        if (props.primary) {
            const { main, hover, active, disabled } = props.theme.colors.primary;
            return css`
                background-color: ${main};
                color: white;
                &:hover { background-color: ${props.noHover ? null : hover} };
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
    background-color: ${props => props.backgroundColor};
    border: none;
    border-radius: .5rem;
    font-weight: 600;
    padding: .5rem 1rem;
    transition: all 150ms ease;
    &:hover {
        cursor: ${props => props.noHover ? 'default' : 'pointer'};
    };
    &:disabled {
        &:hover {
            cursor: not-allowed;
        };
    };
`;

export const CircleButton = styled(Button)`
    position: relative;
    border-radius: 50%;
    ${props => {
        return props.complete && css`
            background-color: ${props.theme.colors.status.success};
            color: white;
        `;
    }};
    ${props => {
        return props.size && css`
            height: ${props.size};
            width: ${props.size};
        `;
    }};
`;

const StepButton = ({ complete, children, label, active }) => {
    return (
        <Flex flexDirection='column' gap='1rem' alignItems='center'>
            <CircleButton noHover size='3rem' complete={complete} primary={active}>
                {complete ? <FontAwesomeIcon icon={faCheck} size='1x' /> : children}
            </CircleButton>
            <Text fontWeight={600}>{label}</Text>
        </Flex>
    );
};

export default StepButton;