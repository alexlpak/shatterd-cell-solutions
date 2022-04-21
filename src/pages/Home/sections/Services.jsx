import { Section } from '../../../components/Section.styled';
import { Flex } from '../../../components/Flex.styled';
import { Heading } from '../../../components/Heading.styled';
import { Text } from '../../../components/Text.styled';
import { useTheme } from 'styled-components';
import IconCard from '../../../components/IconCard';
import ScheduleAppointmentButton from '../../../components/ScheduleAppointmentButton';
import { useMediaQuery } from 'react-responsive';
import { Grid } from '../../../components/Grid.styled';

const cardData = [
    { title: 'Free Device Diagnostic', icon: 'clipboard-check' },
    { title: 'Phone Repair', icon: 'mobile-button' },
    { title: 'Tablet Repair', icon: 'tablet-button' },
    { title: 'Console Repair', icon: 'gamepad' },
    { title: 'Laptop Repair', icon: 'laptop' },
    { title: 'Sell Your Broken Device', icon: 'money-bill-wave' }
];

const sectionData = {
    title: 'Services',
    description: 'We offer device repair on just about all your favorite devices.'
};

const Services = () => {
    const theme = useTheme();
    const isBreakpoint = useMediaQuery({ maxWidth: 580 });

    return (
        <Section $backgroundColor={theme.colors.secondary.main} $color='white' id='services'>
            <Flex $flexDirection='column' $alignItems='center' $justifyContent='center' $gap='2rem' $width='100%'>
                <Flex $flexDirection='column' $alignItems='center' $gap='1rem'>
                    <Heading>{sectionData.title}</Heading>
                    <Text>{sectionData.description}</Text>
                </Flex>
                <Grid
                    $gap='1rem'
                    $width='100%'
                    $gridTemplateColumns={isBreakpoint ? 'repeat(2, minmax(0, 1fr))' : 'repeat(3, minmax(0, 1fr))'}
                    $gridTemplateRows={isBreakpoint ? 'repeat(3, minmax(0, 1fr))' : 'repeat(2, minmax(0, 1fr))'}
                >
                    {cardData.map(card => {
                        return (
                            <IconCard
                                key={card.title}
                                $iconColor={theme.colors.primary.main}
                                $size='2x'
                                $width='100%'
                                $icon={card.icon}
                                $label={card.title}
                                $border={`2px solid ${theme.colors.primary.main}`}
                                $alignItems='center'
                                $justifyContent='center'
                            />
                        );
                    })}
                </Grid>
                <ScheduleAppointmentButton />
            </Flex>
        </Section>
    );
};

export default Services;