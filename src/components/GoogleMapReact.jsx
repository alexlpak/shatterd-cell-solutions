import { Wrapper } from "@googlemaps/react-wrapper";
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapFrame = styled.div`
    height: 30rem;
    width: 30rem;
    background-color: orange;
`;

const Map = () => {

    const render = (status) => {
        return <h1>{status}</h1>;
    };
    const [map, setMap] = useState();

    const ref = useRef(null);

    useEffect(() => {
        console.log(ref, map, ref.current, !map)
        if (ref.current && !map) setMap(new window.google.maps.Map(ref.current, {}));
    }, [ref, map]);

    return (
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY} render={render}>
            <MapFrame ref={ref} />
        </Wrapper>
    );
};

export default Map;