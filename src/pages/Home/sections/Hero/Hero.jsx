import { Flex } from '../../../../components/Flex.styled';
import { Section } from '../../../../components/Section.styled';
import { Heading } from '../../../../components/Heading.styled';
import HeroList from './HeroList';
import { useTheme } from 'styled-components';
import HeroPhoneImage from './HeroPhoneImage/HeroPhoneImage';
import ScheduleAppointmentButton from '../../../../components/ScheduleAppointmentButton';

const Hero = () => {
    const theme = useTheme();
    return (
        <Section>
            <Flex justifyContent='center' gap='1rem'>
                <Flex flexDirection='column' alignItems='flex-start' justifyContent='center' gap='1rem'>
                    <Flex flexDirection='column'>
                        <Heading>Fast, affordable</Heading>
                        <Heading color={theme.colors.primary.main}>device repair</Heading>
                    </Flex>
                    <HeroList />
                    <ScheduleAppointmentButton />
                </Flex>
                <HeroPhoneImage />
            </Flex>
        </Section>
    );
};

export default Hero;