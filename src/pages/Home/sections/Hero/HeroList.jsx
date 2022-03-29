import { useTheme } from 'styled-components';
import { Flex } from '../../../../components/Flex.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../../../components/Text.styled';

const data = [
    'Screens, batteries, game consoles, and laptops',
    '100% satisfaction guaratee',
    'Free estimates',
    'High-quality parts'
];

const HeroList = () => {
    const theme = useTheme();
    return (
        <Flex as='ul' flexDirection='column' gap='1rem'>
            {data.map(item => {
                return (
                    <Flex as='li' key={item} gap='.5rem' alignItems='center'>
                        <FontAwesomeIcon icon={faStar} color={theme.colors.primary} />
                        <Text>{item}</Text>
                    </Flex>
                );
            })}
        </Flex>
    );
};

export default HeroList;