import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Flex } from './Flex.styled';
import { Text } from './Text.styled';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
    border: none;
    ${({ $primary, $secondary, $noHover, theme }) => {
        if ($primary) {
            const { main, hover, active, disabled } = theme.colors.primary;
            return css`
                background-color: ${main};
                color: white;
                &:hover { background-color: ${$noHover ? null : hover} };
                &:active { background-color: ${active} };
                &:disabled { background-color: ${disabled} };
            `;
        }
        else if ($secondary) {
            const { main, hover, active, disabled } = theme.colors.lightGray;
            return css`
                border: 2px solid ${theme.colors.primary.main};
                background-color: white;
                color: black;
                &:hover { background-color: ${hover} };
                &:active { background-color: ${active} };
                &:disabled { background-color: ${disabled} };
            `;
        };
    }};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    border-radius: .5rem;
    font-weight: 600;
    padding: .5rem 1rem;
    transition: all 150ms ease;
    ${({ $flex, $flexDirection, $gap, $centered }) => {
        if ($flex) return css`
            display: flex;
            gap: ${$gap};
            flex-direction: ${$flexDirection};
            justify-content: ${$centered && 'center'};
            align-items: ${$centered && 'center'};
        `;
    }}
    &:hover {
        cursor: ${({ $noHover }) => $noHover ? 'default' : 'pointer'};
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
    ${({ $complete, theme }) => {
        return $complete && css`
            border: none;
            background-color: ${theme.colors.status.success};
            color: white;
        `;
    }};
    ${({ $size }) => {
        return $size && css`
            height: ${$size};
            width: ${$size};
        `;
    }};
`;

const StepButton = ({ complete, children, label, active }) => {
    return (
        <Flex $flexDirection='column' $gap='1rem' $alignItems='center'>
            <CircleButton $noHover $size='3rem' $secondary  $primary={active} $complete={complete}>
                {complete ? <FontAwesomeIcon icon={faCheck} size='1x' /> : children}
            </CircleButton>
            <Text $fontWeight={600}>{label}</Text>
        </Flex>
    );
};

export default StepButton;