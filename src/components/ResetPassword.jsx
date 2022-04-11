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

const ResetPassword = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const { login, logout, currentUser, resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(email);
            setMessage('Check your inbox for further instructions');
        }
        catch {
            setError('Failed to reset password')
        }
        setLoading(false);
    };

    return (
        <Section>
            <Flex as='form' $flexDirection='column' $gap='1rem' onSubmit={handleSubmit}>
                {currentUser && currentUser.email}
                {error && error}
                {message && message}
                <Heading>Reset Password</Heading>
                <Input ref={emailRef} name='email' label='Email' type='email' />
                <Button $primary disabled={loading} type='submit'>Reset Password</Button>
                <Text>Don't have an account? <RouterLink to='/signin'>Sign In</RouterLink></Text>
            </Flex>
        </Section>
    );
};

export default ResetPassword;
