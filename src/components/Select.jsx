import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Flex } from './Flex.styled';
import { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Text } from './Text.styled';

const InputWrapper = styled(Flex).attrs({
    alignItems: 'stretch'
})`
    position: relative;
    border: ${props => props.border || `2px solid ${props.theme.colors.primary.main}`};
    width: ${props => props.width || '25rem'};
    border-radius: .5rem;
`;

const Placeholder = styled.span`
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

const SelectIconButton = styled(Flex).attrs({
    justifyContent: 'center',
    alignItems: 'center'
})`
    width: 3rem;
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
    &:not([value=""]) ~ ${SelectIconButton} {
        width: 0rem;
    };
`;

const SelectOptionsGroup = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    z-index: 999999;
    top: ${props => props.optionsTop || 'calc(3rem + 2px)'};
    left: 0;
    width: 100%;
    background-color: white;
    border: ${props => props.border || `2px solid ${props.theme.colors.primary.main}`};
    border-radius: 0rem 0rem .5rem .5rem;
    max-height: 20rem;
    overflow-y: scroll;
`;

const SelectOption = styled.li`
    user-select: none;
    padding: 1rem;
    font-weight: 600;
    width: 100%;
    transition: all 150ms ease;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.lightGray.main};
    };
`;

const Select = ({ type, name, label, onChange, initialValue, options }) => {
    const [value, setValue] = useState(initialValue || '');
    const [optionsOpen, setOptionsOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
        if (optionsOpen){
            setFilteredOptions(options);
        };
    }, [optionsOpen]);

    useEffect(() => {
        if (onChange) onChange({ [name]: value });
            setFilteredOptions(() => {
                return options.filter(option => {
                    return option.toLowerCase().includes(value.toLowerCase());
                });
            });
    }, [value]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const clearInput = () => {
        setValue('');
        inputEl.current.focus();
    };

    const handleSelectIconClick = () => {
        inputEl.current.focus();
    };

    const handleOptionSelect = (option) => {
        setValue(option);
        setOptionsOpen(false);
    };

    const handleInputFocus = () => {
        if (options) {
            setOptionsOpen(true);
            setValue('');
        };
    };

    const inputEl = useRef(null);

    const optionsEl = useRef(null);

    return (
        <InputWrapper>
            <InputStyled
                ref={inputEl}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={() => options && setOptionsOpen(false)}
            />
            <Placeholder>{label}</Placeholder>
            <ClearInputButton onClick={clearInput}>
                <FontAwesomeIcon icon={faXmark} />
            </ClearInputButton>
            <SelectIconButton onClick={handleSelectIconClick}>
                <FontAwesomeIcon icon={faAngleDown} />
            </SelectIconButton>
            {options && optionsOpen &&
                <SelectOptionsGroup ref={optionsEl}>
                {options && filteredOptions.map(option => {
                    return (
                        <SelectOption
                            key={option}
                            value={option}
                            onMouseDown={() => handleOptionSelect(option)}
                        >
                            {option}
                        </SelectOption>
                        );
                })}
            </SelectOptionsGroup>}
        </InputWrapper>
    );
};

Select.defaultProps = {
    type: 'text'
};

export default Select;