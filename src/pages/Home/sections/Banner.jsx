import { Section } from '../../../components/Section.styled';
import { Flex } from '../../../components/Flex.styled';
import { Text } from '../../../components/Text.styled';
import { useTheme } from 'styled-components';

const Banner = () => {
    const theme = useTheme();
    return (
        <Section $backgroundColor={theme.colors.primary.main} $color='white' $padding='1rem'>
            <Flex $justifyContent='center' $alignItems='center'>
                <Text $fontWeight={600}>Save $10 by booking your appointment online!</Text>
            </Flex>
        </Section>
    )
};

export default Banner;