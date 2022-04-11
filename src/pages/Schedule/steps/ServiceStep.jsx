import { Grid } from '../../../components/Grid.styled';
import IconCardSelect from '../../../components/IconCardSelect';
import { useEffect, useState } from 'react';
import { useForm } from '../../../contexts/FormContext';

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
    const [data, setData] = useForm();

    const handleChange = (valueObj) => {
        setData(prevData => ({ ...prevData, ...valueObj }));
    };

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
                        onChange={handleChange}
                    />
                );
            })}
        </Grid>
    );
};

export default ServiceStep;