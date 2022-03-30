import React, { useEffect, useState, Children } from 'react';
import { Flex } from './Flex.styled';
import Input from './Input';

const Form = ({ name, onComplete, children }) => {
    const [formComplete, setFormComplete] = useState(false);
    const [data, setData] = useState({});

    const updateData = (key, value) => {
        setData(prevData => ({ ...prevData, [key]: value }));
    };

    const checkFormCompletion = () => {
        return Children.toArray(children).every(child => data[child.props.name]);
    };

    useEffect(() => {
        console.log('Form (data):',data);
        setFormComplete(checkFormCompletion());
    }, [data]);

    useEffect(() => {
        console.log('Form (formComplete):',formComplete);
        if (onComplete && formComplete) onComplete(data);
    }, [formComplete]);

    return (
        <Flex as='form' flexDirection='column' gap='1rem' width='100%'>
            {Children.toArray(children).map(child => {
                const newElement = React.cloneElement(child, { updateData: updateData });
                return newElement;
            })}
        </Flex>
    );
};

export default Form;