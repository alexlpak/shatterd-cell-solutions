import { Section } from '../../../components/Section.styled';
import { Flex } from '../../../components/Flex.styled';
import { Grid } from '../../../components/Grid.styled';
import { Heading } from '../../../components/Heading.styled';
import { Text } from '../../../components/Text.styled';
import { useTheme } from 'styled-components';
import IconCard from '../../../components/IconCard';
import ScheduleAppointmentButton from '../../../components/ScheduleAppointmentButton';
import { useMediaQuery } from 'react-responsive';

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
    description: 'We know that people break more than just their phones, so we offer device repair on just about all your favorite devices.'
};

const Services = () => {
    const theme = useTheme();
    const isBreakpoint = useMediaQuery({ maxWidth: 365 });

    return (
        <Section $backgroundColor={theme.colors.secondary.main} $color='white' id='services'>
            <Flex $flexDirection='column' $alignItems='center' $justifyContent='center' $gap='1rem'>
                <Heading>{sectionData.title}</Heading>
                <Text>{sectionData.description}</Text>
                <Flex layout $maxWidth='35rem' $gap='1rem' $alignItems='center' $justifyContent='center'>
                    {cardData.map(card => {
                        return (
                            <IconCard
                                layout
                                key={card.title}
                                $iconColor={theme.colors.primary.main}
                                $size='2x'
                                $height='10rem'
                                $width={isBreakpoint ? '100%' : '10rem'}
                                $icon={card.icon}
                                $label={card.title}
                                $border={`2px solid ${theme.colors.primary.main}`}
                                $alignItems='center'
                                $justifyContent='center'
                            />
                        );
                    })}
                </Flex>
                <ScheduleAppointmentButton />
            </Flex>
        </Section>
    );
};

export default Services;