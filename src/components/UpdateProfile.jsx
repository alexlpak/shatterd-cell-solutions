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

const UpdateProfile = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const passwordConfirmRef = React.createRef();

    const navigate = useNavigate();

    const { currentUser, updateEmail, updatePassword } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        setError('');
        setLoading(true);
        const promises = [];

        if (email !== currentUser.email) {
            promises.push(updateEmail(email));
        };

        if (password === passwordConfirm) {
            promises.push(updatePassword(password));
        };

        Promise.all(promises).then(() => {
            navigate('/');
        }).catch(() => {
            setError('Failed to update account');
        }).finally(() => {
            setLoading(false);
        })

        setLoading(false);
    };

    return (
        <Section>
            <Flex as='form' $flexDirection='column' $gap='1rem' onSubmit={handleSubmit}>
                {currentUser && JSON.stringify(currentUser)}
                {error && error}
                <Heading>Update Profile</Heading>
                <Input ref={emailRef} name='email' label='Email' type='email' />
                <Input ref={passwordRef} name='password' label='Password' type='password'/>
                <Input ref={passwordConfirmRef} name='confirmPassword' label='Confirm Password' type='password'/>
                <Button $primary disabled={loading} type='submit'>Update</Button>
                <Text>Already have an account? <RouterLink to='/signin'>Sign In</RouterLink></Text>
            </Flex>
        </Section>
    );
};

export default UpdateProfile;
