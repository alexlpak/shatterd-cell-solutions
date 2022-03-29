import { Section } from '../../components/Section.styled';
import { Flex } from '../../components/Flex.styled';
import { Heading } from '../../components/Heading.styled';
import { useTheme } from 'styled-components';
import Input from '../../components/Input';
import { useEffect, useState } from 'react';
import Form from '../../components/Form';
import { Button } from '../../components/Button.styled';
import { RouterLink } from '../../components/RouterLink.styled';

const userInfo = [
    {
        component: 'Input',
        name: 'firstName',
        label: 'First Name'
    },
    {
        component: 'Input',
        name: 'lastName',
        label: 'Last Name'
    },
    {
        component: 'Input',
        name: 'email',
        label: 'Email Address'
    }
];

const Schedule = () => {
    const theme = useTheme();
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(data);
    }, [data])

    const handleComplete = (key, value) => {
        setData(prevData => ({ ...prevData, [key]: value }));
    };

    return (
        <Section>
            <Flex flexDirection='column' alignItems='center' gap='1rem'>
                <Heading color={theme.colors.primary}>Schedule Appointment</Heading>
                <Form fields={userInfo} />
                <Flex gap='1rem'>
                    <RouterLink to='/'><Button secondary>Cancel</Button></RouterLink>
                    <Button secondary>Back</Button>
                    <Button primary>Next</Button>
                    <Button primary>Finish</Button>
                </Flex>
            </Flex>
        </Section>
    );
};

export default Schedule;