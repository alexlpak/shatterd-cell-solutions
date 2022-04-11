import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Card } from './Card.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from './Text.styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Flex } from './Flex.styled';
import { useForm } from '../contexts/FormContext';
library.add(fas);

const IconCardStyled = styled(Card)`
	user-select: none;
	&:hover {
		cursor: pointer;
	};
`;

const IconCardSelect = ({ name, onChange, icon, label }) => {
	const [data, setData] = useForm();
    const [selected, setSelected] = useState(data[name] ?? false);

	const handleClick = () => {
		setSelected(prevState => !prevState);
	};

	useEffect(() => {
		if (onChange) onChange({ [name]: selected });
	}, [selected]);

	const theme = useTheme();

    return (
        <IconCardStyled
            $border={`2px solid ${selected ? theme.colors.primary.main : theme.colors.lightGray.main}`}
            onClick={handleClick}
			style={{ transition: 'all 150ms ease' }}
        >
            <FontAwesomeIcon
				icon={['fas', icon]}
				size='2x'
				color={selected ? theme.colors.primary.main : theme.colors.gray.main}
				style={{ transition: 'all 150ms ease' }}
			/>
			<Text $fontWeight={600} $textAlign='center'>{label}</Text>
        </IconCardStyled>
	);
};

IconCardSelect.defaultProps = {
    icon: 'star',
    size: '1x',
    label: 'Lorem Ipsum'
};

export default IconCardSelect;
