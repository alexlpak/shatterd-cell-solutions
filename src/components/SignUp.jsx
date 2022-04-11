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
import { useTheme } from 'styled-components';

const SignUp = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const passwordConfirmRef = React.createRef();

    const { signup, currentUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        if (password !== passwordConfirm) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password);
        }
        catch {
            setError('Failed to create an account')
        }

        setLoading(false);
    };

    return (
        <Section>
            <Flex as='form' $flexDirection='column' $gap='1rem' onSubmit={handleSubmit}>
                {currentUser && currentUser.email}
                {error && error}
                <Heading $color={theme.colors.primary.main}>Sign Up</Heading>
                <Input ref={emailRef} name='email' label='Email' type='email' />
                <Input ref={passwordRef} name='password' label='Password' type='password'/>
                <Input ref={passwordConfirmRef} name='confirmPassword' label='Confirm Password' type='password'/>
                <Button $primary disabled={loading} type='submit'>Submit</Button>
                <Text>Already have an account? <RouterLink to='/signin'>Sign In</RouterLink></Text>
            </Flex>
        </Section>
    );
};

export default SignUp;
