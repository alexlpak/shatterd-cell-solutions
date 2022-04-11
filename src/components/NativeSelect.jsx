import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Flex } from './Flex.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { css } from 'styled-components';
import { useForm } from '../contexts/FormContext';

const SelectWrapper = styled(Flex).attrs({
    $alignItems: 'stretch'
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
    ${({ $lifted }) => $lifted && css`
        opacity: 1;
        color: ${({ theme }) => theme.colors.primary.main};
        top: calc(-.5rem - 2px);
        background-color: white;
        padding: 0rem 0.5rem;
    `}
`;

const SelectIconButton = styled(Flex).attrs({
    $justifyContent: 'center',
    $alignItems: 'center'
})`
    pointer-events: none;
    position: absolute;
    height: 100%;
    right: 0;
    width: 3rem;
    overflow: hidden;
    opacity: 0.5;
    transition: all 150ms ease;
    &:hover {
        cursor: pointer;
    };
`;

const SelectStyled = styled.select`
    appearance: none;
    padding: 1rem;
    border: none;
    background-color: transparent;
    width: 100%;
    border-radius: .5rem 0rem 0rem .5rem;
    &:hover {
        cursor: pointer;
    };
`;

const NativeSelect = ({ name, label, onChange, options }) => {
    const [data, setData] = useForm();
    const [value, setValue] = useState(data[name] ?? '');

    useEffect(() => {
        if (onChange) onChange({ [name]: value });
    }, [value]);

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
    };

    const selectEl = useRef(null);

    return (
        <SelectWrapper>
            <SelectStyled
                ref={selectEl}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option value=''></option>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </SelectStyled>
            <Placeholder $lifted={!!value}>{label}</Placeholder>
            <SelectIconButton>
                <FontAwesomeIcon icon={faAngleDown} />
            </SelectIconButton>
        </SelectWrapper>
    );
};

export default NativeSelect;