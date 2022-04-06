import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Flex } from './Flex.styled';
import { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from '../hooks/useLocalStorage';

const InputWrapper = styled(Flex).attrs({
    alignItems: 'stretch'
})`
    position: relative;
    border: ${({ $border, theme }) => $border || `2px solid ${theme.colors.primary.main}`};
    width: ${({ $width }) => $width || '25rem'};
    border-radius: .5rem;
`;

const Placeholder = styled.label`
    opacity: 0.5;
    font-weight: 600;
    position: absolute;
    top: 1rem;
    left: 1rem;
    transition: all 150ms ease;
    border-radius: .25rem;
    pointer-events: none;
`;

const ClearInputButton = styled(Flex).attrs({
    justifyContent: 'center',
    alignItems: 'center'
})`
    width: 0rem;
    overflow: hidden;
    opacity: 0.5;
    transition: all 150ms ease;
    &:hover {
        cursor: pointer;
    };
`;

const InputStyled = styled.input`
    padding: ${props => props.value ? '1rem 0rem 1rem 1rem' : '1rem'};
    border: none;
    background-color: transparent;
    width: 100%;
    border-radius: .5rem 0rem 0rem .5rem;
    &:focus ~ ${Placeholder}, &:not([value=""]) ~ ${Placeholder} {
        opacity: 1;
        color: ${props => props.theme.colors.primary.main};
        top: calc(-.5rem - 2px);
        background-color: white;
        padding: 0rem 0.5rem;
    };
    &:not([value=""]) ~ ${ClearInputButton} {
        width: 3rem;
    };
`;

const Input = ({ type, name, label, onChange}) => {
    const [value, setValue] = useLocalStorage(name, '');

    useEffect(() => {
        if (onChange) onChange({ [name]: value });
    }, [value]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const clearInput = () => {
        setValue('');
        inputEl.current.focus();
    };

    const inputEl = useRef(null);

    return (
        <InputWrapper>
            <InputStyled
                ref={inputEl}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
            />
            <Placeholder>{label}</Placeholder>
            <ClearInputButton onClick={clearInput}>
                <FontAwesomeIcon icon={faXmark} />
            </ClearInputButton>
        </InputWrapper>
    );
};

Input.defaultProps = {
    type: 'text'
};

export default Input;