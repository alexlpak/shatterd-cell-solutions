import { useEffect, useState } from 'react';
import { Flex } from '../../../components/Flex.styled';
import Input from '../../../components/Input';
import Form from '../../../components/Form';

const UserInfoStep = ({ name, onChange }) => {
    const [data, setData] = useState({});

    const handleChange = (valueObj) => {
        setData(prevData => ({ ...prevData, ...valueObj }));
    };

    useEffect(() => {
        if (onChange) onChange({ [name]: data });
    }, [data]);

    return (
        <>
            <Input name='firstName' label='First Name' onChange={handleChange} />
            <Input name='lastName' label='Last Name' onChange={handleChange} />
            <Input name='email' label='Email Address' onChange={handleChange} />
        </>
    );
};

export default UserInfoStep;