import { useEffect, useState } from 'react';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

const DeviceInfoStep = ({ name, onChange }) => {
    const [data, setData] = useState({});

    const handleChange = (valueObj) => {
        setData(prevData => ({ ...prevData, ...valueObj }));
    };

    useEffect(() => {
        if (onChange) onChange({ [name]: data });
    }, [data]);

    return (
        <>
            <Select
                name='type'
                label='Type'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
            <Select
                name='brand'
                label='Brand'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
            <Select
                name='model'
                label='Model'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
        </>
    );
};

export default DeviceInfoStep;