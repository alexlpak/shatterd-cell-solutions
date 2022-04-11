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

const SignIn = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        return () => {};
    }, []);

    const navigate = useNavigate();

    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const { login, logout, currentUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/schedule')
        }
        catch {
            setError('Failed to log in')
        }
        setLoading(false);
    };

    return (
        <Section>
            <Flex as='form' $flexDirection='column' $gap='1rem' onSubmit={handleSubmit}>
                {currentUser && currentUser.email}
                {error && error}
                <Heading $color={theme.colors.primary.main}>Sign In</Heading>
                <Input ref={emailRef} name='email' label='Email' type='email' />
                <Input ref={passwordRef} name='password' label='Password' type='password'/>
                <Button $primary disabled={loading} type='submit'>Sign In</Button>
                <Text>Don't have an account? <RouterLink to='/signup' $color={theme.colors.primary.main}>Sign Up</RouterLink></Text>
                <Text>Forgot your password? <RouterLink to='/reset-password'>Reset Password</RouterLink></Text>
            </Flex>
        </Section>
    );
};

export default SignIn;
