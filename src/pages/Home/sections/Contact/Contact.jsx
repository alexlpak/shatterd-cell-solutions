import { Section } from '../../../../components/Section.styled';
import { Heading } from '../../../../components/Heading.styled';
import { Text } from '../../../../components/Text.styled';
import { Button } from '../../../../components/Button.styled';
import { Flex } from '../../../../components/Flex.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPhone, faEnvelope, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
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
    $justifyContent: 'center',
    $flexWrap: 'nowrap',
})`
    ${({ $hover }) => {
        return $hover && css`
            &:hover {
                cursor: pointer;
            }
        `;
    }};
`;

const ContactItem = ({ icon, text, children, hover, onClick }) => {
    const theme = useTheme();
    return (
        <ContactItemStyled onClick={onClick} $hover={hover}>
            <FontAwesomeIcon icon={icon} size='2x' color={theme.colors.primary.main} />
            {children ? children : <Text>{text}</Text>}
        </ContactItemStyled>
    );
};

const Hours = () => {
    const [hoursVisible, setHoursVisible] = useState(false);
    const { hours } = data;
    return (
        <ContactItem hover={true} icon={faClock} onClick={() => setHoursVisible(prevVal => !prevVal)}>
            <Flex $gap='.5rem' $alignItems='center' $flexWrap='noWrap'>
                {hoursVisible ?
                    <>
                        <Flex $flexDirection='column' $gap='.5rem' $flexWrap='nowrap' $justifyContent='center'>
                            {
                                Object.keys(hours).map(day => {
                                    return <Text $whiteSpace='break-spaces' key={day}>{capitalizeWord(day)} {hours[day]}</Text>
                                })
                            }
                            
                        </Flex>
                        <FontAwesomeIcon icon={faAngleUp} />
                    </>
                     :
                    <Flex $gap='.5rem' $flexWrap='nowrap' $alignItems='center' $justifyContent='center'>
                        <Text>Open today {hours[Object.keys(hours)[new Date().getDay()]]}</Text>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Flex>
                }
            </Flex>
        </ContactItem>
    );
};

const ContactUs = () => {
    const theme = useTheme();
    const isBreakpoint = useMediaQuery({ maxWidth: 669 });

    return (
        <Section $backgroundColor={theme.colors.secondary.main} $color='white' id='contact'>
            <Flex $gap='2rem' $flexDirection='column' $alignItems='center' $width='100%'>
                <Flex $gap='1rem' $flexDirection='column' $alignItems='center'>
                    <Heading $textAlign='center'>{data.title}</Heading>
                    <Text $textAlign='center' $whiteSpace='break-spaces'>{data.body}</Text>
                </Flex>
                <Flex $gap='2rem' $justifyContent={isBreakpoint ? 'center' : 'space-between'} $width='100%' $flexWrap={isBreakpoint ? 'wrap' : 'nowrap'}>
                    <Flex $gap='2rem' $alignItems='flex-start' $flexDirection='column'>
                        <ContactItem icon={faLocationDot} text={data.address} />
                        <ContactItem icon={faPhone}>
                            <Link href={`tel: ${data.phone}`}>{data.phone}</Link>
                        </ContactItem>
                        <Hours />
                        <Link style={{ alignSelf: isBreakpoint && 'center' }} href={'mailto:solutions@shatterdcell.com?subject=Shatter\'d Cell Solutions - Contact Us'}>
                            <Button $flex $gap='.5rem' $primary $centered>
                                <Text>Send a Message</Text>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Button>
                        </Link>
                    </Flex>
                    <GoogleMap address='100 N Broadway Ste 160, Edmond, OK 73034' />
                </Flex>
            </Flex>
        </Section>
    );
};

export default ContactUs;