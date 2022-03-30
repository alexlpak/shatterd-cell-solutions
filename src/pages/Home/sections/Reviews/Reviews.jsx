import { Section } from '../../../../components/Section.styled';
import { Flex } from '../../../../components/Flex.styled';
import { Heading } from '../../../../components/Heading.styled';
import { Text } from '../../../../components/Text.styled';
import ScheduleAppointmentButton from '../../../../components/ScheduleAppointmentButton';
import { useTheme } from 'styled-components';
import ReviewCard from './ReviewCard';

const sectionData = {
    title: 'Reviews',
    description: 'We guarantee great service here! Don\'t just take our word for it. Here\'s what some of our customer have to say:'
};

const data = {
    name: 'John Doe',
    date: '12/12/2021',
    imgSrc: '',
    title: 'Awesome work!',
    body: 'This is sample description. I am just SO impressed like OMG wow what even is this.',
    rating: 4
};

const reviews = new Array(3).fill(data);

const Reviews = () => {
    const theme = useTheme();
    return (
        <Section id='reviews'>
            <Flex flexDirection='column' alignItems='center' gap='1rem'>
                <Heading color={theme.colors.primary.main}>{sectionData.title}</Heading>
                <Text>{sectionData.description}</Text>
                <Flex gap='1rem' childMaxWidth='15rem'>
                    {reviews.map((review, index) => <ReviewCard key={review.body+index} {...review} />)}
                </Flex>
                <ScheduleAppointmentButton />
            </Flex>
        </Section>
    );
};

export default Reviews;