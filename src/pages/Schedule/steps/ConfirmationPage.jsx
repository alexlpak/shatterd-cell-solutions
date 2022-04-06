import {Heading} from '../../../components/Heading.styled';
import {useTheme} from 'styled-components';
import {Text} from '../../../components/Text.styled';
import {Flex} from '../../../components/Flex.styled';
import {Section} from '../../../components/Section.styled';
import ConfirmationDetails from '../components/ConfirmationDetails';
import { useEffect } from 'react';
import { Button } from '../../../components/Button.styled';
import { RouterLink } from '../../../components/RouterLink.styled';

const ConfirmationPage = ({ data }) => {
    const theme = useTheme();

    return (
        <Section>
            <Flex $flexDirection='column' $alignItems='flex-start' $gap='1rem'>
                <Heading $color={theme.colors.primary.main}>See you soon!</Heading>
                <Text>Your appointment has been confirmed!</Text>
                <Text>A confirmation email will be sent to your provided email.</Text>
                {<ConfirmationDetails data={data} />}
                <RouterLink to='/'><Button $primary>Done</Button></RouterLink>
            </Flex>
        </Section>
    );
};

export default ConfirmationPage;
