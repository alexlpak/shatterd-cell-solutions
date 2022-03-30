import { useEffect, useState } from 'react';
import Input from '../../../components/Input';

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
            <Input name='brand' label='Device Brand' onChange={handleChange} />
            <Input name='model' label='Device Model' onChange={handleChange} />
        </>
    );
};

export default DeviceInfoStep;