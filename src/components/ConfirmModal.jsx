import styled from 'styled-components';
import { Flex } from './Flex.styled';
import { Button } from './Button.styled';
import { Text } from './Text.styled';
import { useState } from 'react';
import { useTheme } from 'styled-components';

const ModalBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100vw;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;

const ModalCard = styled(Flex).attrs({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'
})`
    padding: 2rem;
    z-index: 1000;
    background-color: white;
    border-radius: .5rem;
`;

const Modal = ({ title, message, onCancel, onSubmit, children }) => {
    const theme = useTheme();

    return (
        <ModalBackground>
            <ModalCard>
                <Text $fontWeight={600} $fontSize='1.5rem' $color={theme.colors.primary.main}>{title}</Text>
                {message && <Text>{message}</Text>}
                {children}
                <Flex $gap='1rem'>
                    <Button $secondary onClick={() => onCancel && onCancel()}>Cancel</Button>
                    <Button onClick={() => onSubmit && onSubmit()} $primary>Submit</Button>
                </Flex>
            </ModalCard>
        </ModalBackground>
    );
};

export default Modal;