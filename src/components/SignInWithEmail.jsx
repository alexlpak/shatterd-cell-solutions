import { useEffect, useState } from 'react';
import React from 'react';
import {Flex} from './Flex.styled';
import {Button} from './Button.styled';
import Input from './Input';
import { Text } from './Text.styled';
import { Heading } from './Heading.styled';
import { Section } from './Section.styled';
import { RouterLink } from './RouterLink.styled';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from './Link.styled';
import { useTheme } from 'styled-components';

const SignInWithEmail = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        return () => {};
    }, []);

    const navigate = useNavigate();

    const firstNameRef = React.createRef();
    const lastNameRef = React.createRef();
    const emailRef = React.createRef();

    const { emailUser, currentUser, loginWithEmail } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;

        try {
            setError('');
            setLoading(true);
            await loginWithEmail(firstName, lastName, email);
            setMessage('An email has been sent to your provided email. Please check your inbox.');
        }
        catch {
            setError('Failed to send email');
        }
        setLoading(false);
    };

    return (
        <Section>
            <Flex as='form' $flexDirection='column' $alignItems='center' $gap='1rem' onSubmit={handleSubmit}>
                {currentUser && currentUser.email}
                {emailUser && emailUser}
                {error && error}
                {message && message}
                <Heading $color={theme.colors.primary.main}>Schedule Appointment</Heading>
                <Text>Enter your contact information below to get started</Text>
                <Input ref={firstNameRef} name='firstName' label='First Name' />
                <Input ref={lastNameRef} name='lastName' label='Last Name' />
                <Input ref={emailRef} name='email' label='Email' type='email' />
                <Button $primary disabled={loading} type='submit'>Get Started</Button>
            </Flex>
        </Section>
    );
};

export default SignInWithEmail;
