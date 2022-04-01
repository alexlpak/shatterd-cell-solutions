import {Heading} from '../../../components/Heading.styled';
import {useTheme} from 'styled-components';
import {Text} from '../../../components/Text.styled';
import {Flex} from '../../../components/Flex.styled';
import {Section} from '../../../components/Section.styled';
import ConfirmationDetails from '../components/ConfirmationDetails';
import { useEffect } from 'react';
import { Button } from '../../../components/Button.styled';
import { RouterLink } from '../../../components/RouterLink.styled';

const ConfirmationPage = (props) => {
    const theme = useTheme();

    useEffect(() => {
        console.log(props.location);
    }, [])

    return (
        <Section>
            <Flex flexDirection='column' alignItems='flex-start' gap='1rem'>
                <Heading color={theme.colors.primary.main}>See you soon!</Heading>
                <Text>Your appointment has been confirmed!</Text>
                <Text>A confirmation email will be sent to your provided email.</Text>
                <RouterLink to='/'><Button primary>Navigate Home</Button></RouterLink>
                {/* {props && <ConfirmationDetails data={props} />} */}
            </Flex>
        </Section>
    );
};

export default ConfirmationPage;
