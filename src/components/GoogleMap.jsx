import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import { GOOGLE_API_KEY, BUSINESS_ID } from '../api/places';
import { Button } from './Button.styled';
import { Flex } from './Flex.styled';
import { Text } from './Text.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Map = styled.iframe.attrs({
    loading: 'lazy',
    allowfullscreen: false,
    referrerpolicy: 'no-referrer-when-downgrade',
    src: `https://www.google.com/maps/embed/v1/place?q=place_id:${BUSINESS_ID}&key=${GOOGLE_API_KEY}`
})`
    border: none;
    border-radius: .5rem;
    overflow: hidden;
    height: 30rem;
    width: 30rem;
    background-color: gray;
`;

const MapFrame = styled(Flex)`
    position: relative;
`;

const GoogleMap = () => {
    return (
        <MapFrame flexDirection='column' alignItems='center'>
            <Map />
            <Flex as={Button} gap='.5rem' primary alignItems='center' style={{ position: 'absolute', bottom: '1rem' }}>
                <Text>Get Directions</Text>
                <FontAwesomeIcon icon={faLocationDot} />
            </Flex>
        </MapFrame>
    );
};

export default GoogleMap;
