import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Card } from './Card.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from './Text.styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Flex } from './Flex.styled';
library.add(fas);

const IconCardStyled = styled(Card)`
	&:hover {
		cursor: pointer;
	};
`;

const IconCardSelect = (props) => {
    const [selected, setSelected] = useState(false);

	const handleClick = () => {
		setSelected(prevState => !prevState);
	};

	useEffect(() => {
		if (props.onChange) props.onChange({ [props.name]: selected });
	}, [selected]);

	const theme = useTheme();

    return (
        <IconCardStyled
            border={`2px solid ${selected ? theme.colors.primary.main : theme.colors.lightGray.main}`}
            onClick={handleClick}
			style={{ transition: 'all 150ms ease' }}
        >
            <FontAwesomeIcon
				icon={['fas', props.icon]}
				size='2x'
				color={selected ? theme.colors.primary.main : theme.colors.gray.main}
				style={{ transition: 'all 150ms ease' }}
			/>
			<Flex flexDirection='column' gap='.25rem'>
				<Text fontWeight={600} textAlign='center'>{props.label}</Text>
				<Text fontSize='.75rem' textAlign='center' whiteSpace='break-spaces'>Est. Service Time:<br />{props.timeEstimate || 'N/A'}</Text>
			</Flex>
        </IconCardStyled>
	);
};

IconCardSelect.defaultProps = {
    icon: 'star',
    size: '1x',
    label: 'Lorem Ipsum'
};

export default IconCardSelect;
