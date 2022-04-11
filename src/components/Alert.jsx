import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Flex } from './Flex.styled';
import { slideDown } from '../animations/animations';

const AlertStyled = styled(Flex).attrs({
    $alignItems: 'center',
    $justifyContent: 'center'
})`
    position: fixed;
    top: 1rem;
    padding: 1rem;
    z-index: 999;
    border-radius: 0.5rem;
    ${({ $type, theme }) => {
        switch ($type) {
            case 'error': return css`
                background-color: ${theme.colors.status.error};
                color: white;
            `;
            case 'success': return css`
                background-color: ${theme.colors.status.success};
                color: white;
            `;
            case 'warning': return css`
                background-color: ${theme.colors.status.warning};
                color: white;
            `;
            default: return theme.colors.gray.main;
        };
    }};
`;

const Alert = ({ type, message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 4000);
    }, []);

    return visible && <AlertStyled {...slideDown} $type={type}>{message}</AlertStyled>;
};

export default Alert;