import { Grid } from '../../../components/Grid.styled';
import IconCardSelect from '../../../components/IconCardSelect';
import { useEffect, useState } from 'react';

export const serviceData = {
    services: [
        {
            name: 'screen-replacement',
            icon: 'mobile-button',
            label: 'Screen Replacement',
            estTime: 1
        },
        {
            name: 'diagnostic',
            icon: 'clipboard-check',
            label: 'Free Device Diagnostic',
            estTime: 1
        },
        {
            name: 'water-damage',
            icon: 'droplet',
            label: 'Water Damage',
            estTime: 1
        },
        {
            name: 'battery-replacement',
            icon: 'battery-quarter',
            label: 'Battery Replacement',
            estTime: .5
        },
        {
            name: 'sell-device',
            icon: 'money-bill-wave',
            label: 'Sell Your Broken Device',
            estTime: .5
        },
    ]
};

const ServiceStep = ({ name, onChange }) => {
    const [stepData, setStepData] = useState({});

    const handleChange = (valueObj) => {
        setStepData(prevData => ({ ...prevData, ...valueObj }));
    };

    useEffect(() => {
        if (onChange) onChange({ [name]: stepData });
    }, [stepData]);

    return (
        <Grid
            $gap='1rem'
            $gridTemplateColumns='repeat(3, 10rem)'
        >
            {serviceData.services.map(service => {
                return (
                    <IconCardSelect
                        key={service.name}
                        icon={service.icon}
                        name={service.name}
                        label={service.label}
                        timeEstimate={`${service.estTime} hr`}
                        onChange={handleChange}
                    />
                );
            })}
        </Grid>
    );
};

export default ServiceStep;