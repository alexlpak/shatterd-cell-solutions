import { useEffect, useState } from 'react';
import NativeSelect from '../../../components/NativeSelect';
import { useForm } from '../../../contexts/FormContext';
import { Flex } from '../../../components/Flex.styled';

const DeviceInfoStep = ({ name, onChange }) => {
    const [data, setData] = useForm();

    const handleChange = (valueObj) => {
        setData(prevData => ({ ...prevData, ...valueObj }));
    };

    useEffect(() => {
        if (onChange) onChange({ [name]: data });
    }, [data]);

    return (
        <>
            <NativeSelect
                name='type'
                label='Device Type'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
            <NativeSelect
                name='brand'
                label='Device Brand'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
            <NativeSelect
                name='model'
                label='Device Model'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
        </>
    );
};

export default DeviceInfoStep;