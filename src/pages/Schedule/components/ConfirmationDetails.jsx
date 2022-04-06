import { Flex } from '../../../components/Flex.styled';
import { Text } from '../../../components/Text.styled';
import { useTheme } from 'styled-components';
import { Heading } from '../../../components/Heading.styled';

const ConfirmationDetails = ({ data }) => {
    const theme = useTheme();
    return (
        <Flex $flexDirection='column' $gap='1rem' $width='100%'>
            <Flex $flexDirection='column' $gap='.25rem'>
                <Text $fontWeight={600} $color={theme.colors.primary.main}>Device</Text>
                <Text>{`${data.device?.brand} ${data.device?.model}`}</Text>
            </Flex>
            <Flex $flexDirection='column' $gap='.25rem'>
                <Text $fontWeight={600} $color={theme.colors.primary.main}>Services</Text>
                <Flex $flexDirection='column'>
                {
                    Object.keys(data.service).filter(service => {
                        return data.service[service]
                    }).map((service, key) => {
                        return <Text key={key}>{service}</Text>
                    })
                }
                </Flex>
            </Flex>
            <Flex $flexDirection='column' $gap='.25rem'>
                <Text $fontWeight={600} $color={theme.colors.primary.main}>Contact</Text>
                <Text>{data.contact?.firstName} {data.contact?.lastName}</Text>
                <Text>{data.contact?.email}</Text>
            </Flex>
            <Flex $flexDirection='column' $gap='.25rem'>
                <Text $fontWeight={600} $color={theme.colors.primary.main}>Schedule</Text>
                <Text>{`${new Date(data.schedule?.date).toDateString()} ${data.schedule?.time}`}</Text>
            </Flex>
        </Flex>
    );
};

export default ConfirmationDetails;
