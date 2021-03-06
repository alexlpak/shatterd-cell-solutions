import { Section } from '../../../../components/Section.styled';
import { Flex } from '../../../../components/Flex.styled';
import { Heading } from '../../../../components/Heading.styled';
import { Text } from '../../../../components/Text.styled';
import ScheduleAppointmentButton from '../../../../components/ScheduleAppointmentButton';
import { useTheme } from 'styled-components';
import ReviewCard from './ReviewCard';
import { useEffect } from 'react';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { addDaysToDate } from '../../../../helper/dates';

const sectionData = {
    title: 'Reviews',
    description: 'We guarantee great service here! Don\'t just take our word for it. Here\'s what some of our customers have to say:'
};

const Reviews = () => {
    const [reviews, setReviews] = useLocalStorage('google-reviews', []);

    const theme = useTheme();

    useEffect(() => {
        const storedTimeout = localStorage.getItem('google-reviews-timeout');
        if (storedTimeout && new Date(storedTimeout) < new Date()) {
            localStorage.removeItem('google-reviews');
            localStorage.removeItem('google-reviews-timeout');
        }
        else if (!storedTimeout) localStorage.setItem('google-reviews-timeout', addDaysToDate(15));
        
        const storedReviewArrayLength = JSON.parse(localStorage.getItem('google-reviews'))?.length;
        if (!storedReviewArrayLength) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
            script.id = 'gmapsapi';
            document.body.appendChild(script);
            script.onload = () => {
                const logPlaceDetails = (placeId) => {
                    const service = new window.google.maps.places.PlacesService(document.getElementById('map'));
                    service.getDetails({
                        placeId: placeId
                    }, (place) => {
                        setReviews(place.reviews);
                    });
                };
                logPlaceDetails(process.env.REACT_APP_GOOGLE_BUSINESS_ID);
            };
        };
    }, [setReviews]);

    return (
        <Section id='reviews'>
            <Flex $flexDirection='column' $alignItems='center' $gap='2rem' $width='100%'>
                <Flex $flexDirection='column' $alignItems='center' $gap='1rem'>
                    <Heading $color={theme.colors.primary.main}>{sectionData.title}</Heading>
                    <Text>{sectionData.description}</Text>
                </Flex>
                <Splide
                    options={{
                        type: 'loop',
                        width: '100%',
                        autoplay: true,
                        perPage: 2,
                        gap: '1rem',
                        pagination: false,
                        breakpoints: {
                            645: {
                                perPage: 1
                            }
                        }
                    }}
                >
                    {reviews && reviews.filter(review => review.rating >= 4).map((review, index) => {
                        return (
                            <SplideSlide key={`${review.text+index}`}>
                                <ReviewCard {...review} />
                            </SplideSlide>
                        );
                    })}
                </Splide>
                <ScheduleAppointmentButton />
            </Flex>
        </Section>
    );
};

export default Reviews;