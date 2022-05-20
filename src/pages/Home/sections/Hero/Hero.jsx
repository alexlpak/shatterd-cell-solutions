import { Section } from '../../../../components/Section.styled';
import { Heading } from '../../../../components/Heading.styled';
import HeroList from './HeroList';
import { useTheme } from 'styled-components';
import HeroPhoneImage from './HeroPhoneImage/HeroPhoneImage';
import ScheduleAppointmentButton from '../../../../components/ScheduleAppointmentButton';
import { Text } from '../../../../components/Text.styled';
import styled from 'styled-components';

const HeroWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-direction: row-reverse;
    @media screen and (max-width: 773px) {
        justify-content: center;
        flex-wrap: wrap;
    };
`;

const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    @media screen and (max-width: 773px) {
        align-items: center;
    };
`;

const HeaderText = styled.h1`
    display: flex;
    flex-direction: column;
`;

const Hero = () => {
    const theme = useTheme();

    return (
        <Section id='hero'>
            <HeroWrapper>
                <HeroPhoneImage />
                <HeroTextWrapper>
                    <HeaderText>
                        <Heading>Fast, affordable</Heading>
                        <Heading $color={theme.colors.primary.main}>device repair</Heading>
                    </HeaderText>
                    <HeroList />
                    <ScheduleAppointmentButton />
                    <Text $fontSize='.75rem' $color={theme.colors.darkGray.main}>* Warranty is valid on most parts. Some exclusions apply.</Text>
                </HeroTextWrapper>
            </HeroWrapper>
        </Section>
    );
};

export default Hero;