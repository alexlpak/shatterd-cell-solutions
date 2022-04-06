import { useEffect, useState } from 'react';
import NativeSelect from '../../../components/NativeSelect';

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
            <NativeSelect
                name='type'
                label='Type'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
            <NativeSelect
                name='brand'
                label='Brand'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
            <NativeSelect
                name='model'
                label='Model'
                options={['Apple','Samsung','LG','Logitech','Sony','Yamaha','Fender','Gibson']}
                onChange={handleChange}
            />
        </>
    );
};

export default DeviceInfoStep;