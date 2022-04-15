import { Flex } from '../../../../components/Flex.styled';
import { Section } from '../../../../components/Section.styled';
import { Heading } from '../../../../components/Heading.styled';
import HeroList from './HeroList';
import { useTheme } from 'styled-components';
import HeroPhoneImage from './HeroPhoneImage/HeroPhoneImage';
import ScheduleAppointmentButton from '../../../../components/ScheduleAppointmentButton';
import { useMediaQuery } from 'react-responsive';
import { Text } from '../../../../components/Text.styled';

const Hero = () => {
    const theme = useTheme();

    const isBreakpoint = useMediaQuery({ maxWidth: 773 });

    return (
        <Section id='hero'>
            <Flex $width='100%' $justifyContent={isBreakpoint ? 'center': 'space-between'} $alignItems='center' $gap='1rem' $flexDirection='row-reverse'>
                <HeroPhoneImage />
                <Flex $flexDirection='column' $alignItems={isBreakpoint ? 'center': 'flex-start'} $justifyContent='center' $gap='1rem'>
                    <Flex $flexDirection='column'>
                        <Heading>Fast, affordable</Heading>
                        <Heading $color={theme.colors.primary.main}>device repair</Heading>
                    </Flex>
                    <HeroList />
                    <ScheduleAppointmentButton />
                    <Text $fontSize='.75rem' $color={theme.colors.darkGray.main}>* Warranty is valid on most parts. Some exclusions apply.</Text>
                </Flex>
            </Flex>
        </Section>
    );
};

export default Hero;