import { Section } from '../../../../components/Section.styled';
import { Heading } from '../../../../components/Heading.styled';
import { Text } from '../../../../components/Text.styled';
import { Button } from '../../../../components/Button.styled';
import { Flex } from '../../../../components/Flex.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPhone, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';
import { Link } from '../../../../components/Link.styled';
import GoogleMap from '../../../../components/GoogleMap';
import { capitalizeWord } from '../../../../helper/string';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { css } from 'styled-components';

const data = {
    title: 'Contact Us',
    body: 'Have questions about your device?\nFeel free to come by and get a free estimate!',
    address: '100 North Broadway #160\nEdmond, Oklahoma 73034',
    phone: '(405) 562-3140',
    hours: {
        sun: '12:00 PM - 4:00 PM',
        mon: '10:00 AM - 7:00 PM',
        tue: '10:00 AM - 7:00 PM',
        wed: '10:00 AM - 7:00 PM',
        thu: '10:00 AM - 7:00 PM',
        fri: '10:00 AM - 7:00 PM',
        sat: '10:00 AM - 3:00 PM',
    }
};

const ContactItemStyled = styled(Flex).attrs({
    $gap: '1rem',
    $alignItems: 'center',
    $justifyContent: 'center'
})`
    ${({ $hover }) => {
        return $hover && css`
            &:hover {
                cursor: pointer;
            }
        `;
    }};
`;

const ContactItem = ({ icon, text, children, hover }) => {
    const theme = useTheme();
    return (
        <ContactItemStyled $hover={hover}>
            <FontAwesomeIcon icon={icon} size='2x' color={theme.colors.primary.main} />
            {children ? children : <Text $whiteSpace='break-spaces'>{text}</Text>}
        </ContactItemStyled>
    );
};

const Hours = () => {
    const [hoursVisible, setHoursVisible] = useState(false);
    const { hours } = data;
    return (
        <ContactItem hover={true} icon={faClock}>
            <Flex $flexDirection='column' $gap='.5rem' onClick={() => setHoursVisible(prevVal => !prevVal)}>
                {hoursVisible ?
                    Object.keys(hours).map(day => <Text key={day}>{capitalizeWord(day)} {hours[day]}</Text>) :
                    <Text>Open today {hours[Object.keys(hours)[new Date().getDay()]]}</Text>
                }
            </Flex>
            <FontAwesomeIcon icon={faAngleDown} />
        </ContactItem>
    );
};

const ContactUs = () => {
    const theme = useTheme();
    const isBreakpoint = useMediaQuery({ maxWidth: 669 });

    return (
        <Section $backgroundColor={theme.colors.secondary.main} $color='white' id='contact'>
            <Flex $gap='1rem' $flexDirection='column' $alignItems='center'>
                <Heading $textAlign='center'>{data.title}</Heading>
                <Text $textAlign='center' $whiteSpace='break-spaces'>{data.body}</Text>
                <Flex $gap='1rem' $justifyContent='center'>
                    <Flex $gap='1rem' $alignItems='flex-start' $flexDirection='column'>
                        <ContactItem icon={faLocationDot} text={data.address} />
                        <ContactItem icon={faPhone} text={data.phone} />
                        <Hours />
                        <Link style={{ alignSelf: isBreakpoint && 'center' }} href='mailto:alex@apak.design?subject=Contact Us'>
                            <Button $flex $gap='.5rem' $primary $centered>
                                <Text>Send a Message</Text>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Button>
                        </Link>
                    </Flex>
                    <GoogleMap address='100 North Broadway #160 Edmond, Oklahoma 73034' />
                </Flex>
            </Flex>
        </Section>
    );
};

export default ContactUs;