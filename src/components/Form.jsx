import { useEffect, useState } from 'react';
import { Flex } from './Flex.styled';
import Input from './Input';

const Form = (props) => {
    const [data, setData] = useState({});
    const [formComplete, setFormComplete] = useState(false);

    const updateData = (key, value) => {
        setData(prevData => ({ ...prevData, [key]: value }));
    };

    const checkFormCompletion = () => {
        return props.fields.map(field => field.name).every(name => data[name])
    };

    useEffect(() => {
        console.log(data);
        setFormComplete(checkFormCompletion());
    }, [data]);

    useEffect(() => {
        console.log(formComplete);
        if (props.onComplete) props.onComplete();
    }, [formComplete]);

    return (
        <Flex as='form' flexDirection='column' gap='1rem' width='100%'>
            {props.fields.map(field => {
                switch (field.component) {
                    case 'Input': return <Input key={field.name} name={field.name} label={field.label} updateData={updateData} />
                };
            })}
        </Flex>
    );
};

export default Form;