import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from './Flex.styled';
import { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const InputWrapper = styled(Flex).attrs({
    alignItems: 'stretch'
})`
    position: relative;
    border: ${props => props.border || `2px solid ${props.theme.colors.primary}`};
    width: ${props => props.width || '100%'};
    border-radius: .5rem;
`;

const InputStyled = styled.input`
    padding: ${props => props.value ? '1rem 0rem 1rem 1rem' : '1rem'};
    border: none;
    background-color: transparent;
    width: 100%;
    border-radius: .5rem 0rem 0rem .5rem;
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
    ${props => {
        return props.active && css`
            opacity: 1;
            color: ${props.theme.colors.primary};
            top: calc(-.5rem - 2px);
            background-color: white;
            padding: 0rem 0.5rem;
        `;
    }}
`;

const ClearInputButton = styled(Flex).attrs({
    justifyContent: 'center',
    alignItems: 'center'
})`
    width: 3rem;
    opacity: 0.5;
    transition: all 150ms ease;
    &:hover {
        cursor: pointer;
    };
`;

const Input = (props) => {
    const [value, setValue] = useState('');
    const [inFocus, setInFocus] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
        if (props.updateData) props.updateData(props.name, e.target.value);
    };
    
    const handleFocus = () => setInFocus(true);
    const handleBlur = () => setInFocus(false);
    const clearInput = () => {
        setValue('');
        if (props.updateData) props.updateData(props.name, '');
    }

    return (
        <InputWrapper>
            <InputStyled
                type={props.type}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name={props.name}
            />
            <Placeholder active={inFocus || value}>{props.label}</Placeholder>
            {value &&
            <ClearInputButton onClick={clearInput}>
                <FontAwesomeIcon icon={faXmark} />
            </ClearInputButton>}
        </InputWrapper>
    );
};

Input.defaultProps = {
    type: 'text'
};

export default Input;