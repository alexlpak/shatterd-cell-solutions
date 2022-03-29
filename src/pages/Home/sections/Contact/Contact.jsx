import { Section } from '../../../../components/Section.styled';
import { Heading } from '../../../../components/Heading.styled';
import { Text } from '../../../../components/Text.styled';
import { Button } from '../../../../components/Button.styled';
import { Flex } from '../../../../components/Flex.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';
import ContactMap from './ContactMap';
import { Link } from '../../../../components/Link.styled';

const data = {
    title: 'Contact Us',
    body: 'Have questions about your device?\nFeel free to come by and get a free estimate!',
    address: '100 North Broadway #160\nEdmond, Oklahoma 73034',
    phone: '(405) 562-3140',
    hours: 'Open today 10 AM - 7 PM'
}

const ContactUs = () => {
    const theme = useTheme();
    return (
        <Section backgroundColor={theme.colors.secondary} color='white'>
            <Flex gap='1rem' flexDirection='column' alignItems='center'>
                <Heading textAlign='center'>{data.title}</Heading>
                <Text textAlign='center' whiteSpace='break-spaces'>{data.body}</Text>
                <Flex gap='1rem'>
                    <Flex gap='1rem' alignItems='flex-start' flexDirection='column'>
                        <Flex gap='1rem' alignItems='center' justifyContent='center'>
                            <FontAwesomeIcon icon={faLocationDot} size='2x' color={theme.colors.primary} />
                            <Text whiteSpace='break-spaces'>{data.address}</Text>
                        </Flex>
                        <Flex gap='1rem' alignItems='center' justifyContent='center'>
                            <FontAwesomeIcon icon={faPhone} size='2x' color={theme.colors.primary} />
                            <Text whiteSpace='break-spaces'>{data.phone}</Text>
                        </Flex>
                        <Flex gap='1rem' alignItems='center' justifyContent='center'>
                            <FontAwesomeIcon icon={faClock} size='2x' color={theme.colors.primary} />
                            <Text whiteSpace='break-spaces'>{data.hours}</Text>
                        </Flex>
                        <Link href='mailto:abc@example.com?subject=ContactUs&body=Message'><Button primary>Send a Message</Button></Link>
                    </Flex>
                    <Flex flexDirection='column' alignItems='center' gap='1rem'>
                        <ContactMap />
                        <Button primary>Get Directions</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Section>
    )
};

export default ContactUs;