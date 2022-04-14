import { Section } from '../../../../components/Section.styled';
import { Flex } from '../../../../components/Flex.styled';
import { Heading } from '../../../../components/Heading.styled';
import { Text } from '../../../../components/Text.styled';
import ScheduleAppointmentButton from '../../../../components/ScheduleAppointmentButton';
import { useTheme } from 'styled-components';
import ReviewCard from './ReviewCard';
import { useEffect, useState } from 'react';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useMediaQuery } from 'react-responsive';

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

const reviewData = new Array(3).fill(data);

const Reviews = () => {
    const [reviews, setReviews] = useLocalStorage('google-reviews', []);

    useEffect(() => {
        console.log(reviews);
    }, [reviews]);

    const theme = useTheme();

    useEffect(() => {
        const existingScript = document.getElementById('gmapsapi');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
            script.id = 'gmapsapi';
            document.body.appendChild(script);
            script.onload = () => {
                const logPlaceDetails = (placeId) => {
                    const service = new window.google.maps.places.PlacesService(document.getElementById('map'));
                    service.getDetails({
                        placeId: placeId
                    }, (place, status) => {
                        console.log('fetched reviews', place);
                        setReviews(place.reviews);
                    });
                };
                logPlaceDetails(process.env.REACT_APP_GOOGLE_BUSINESS_ID);
            };
        };
    }, []);

    return (
        <Section id='reviews'>
            <Flex $flexDirection='column' $alignItems='center' $gap='1rem' $width='100%'>
                <Heading $color={theme.colors.primary.main}>{sectionData.title}</Heading>
                <Text>{sectionData.description}</Text>
                <Splide
                    options={{
                        type: 'loop',
                        width: '100%',
                        autoplay: true
                    }}
                >
                    {reviews && reviews.map((review, index) => {
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