import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button } from './Button.styled';
import { Flex } from './Flex.styled';
import { Text } from './Text.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from './Link.styled';

const Map = styled.iframe.attrs({
    loading: 'lazy',
    allowfullscreen: false,
    referrerpolicy: 'no-referrer-when-downgrade',
    src: `https://www.google.com/maps/embed/v1/place?q=place_id:${process.env.REACT_APP_GOOGLE_BUSINESS_ID}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
})`
    border: none;
    border-radius: .5rem;
    overflow: hidden;
    height: 25rem;
    width: 25rem;
    background-color: gray;
`;

const MapFrame = styled(Flex)`
    position: relative;
`;

const GoogleMap = ({ address }) => {
    return (
        <MapFrame $flexDirection='column' $alignItems='center'>
            <Map />
            <Link href={`http://maps.google.com/?q=${address}`} target='_blank' style={{ position: 'absolute', bottom: '1rem' }}>
                <Button $flex $gap='.5rem' $primary $centered>
                    <Text>Get Directions</Text>
                    <FontAwesomeIcon icon={faLocationDot} />
                </Button>
            </Link>
        </MapFrame>
    );
};

export default GoogleMap;
