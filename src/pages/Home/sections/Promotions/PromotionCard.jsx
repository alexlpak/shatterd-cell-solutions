import { Card } from '../../../../components/Card.styled';
import { Text } from '../../../../components/Text.styled';
import { Button } from '../../../../components/Button.styled';
import { SubHeading } from '../../../../components/SubHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from 'styled-components';
import { Flex } from '../../../../components/Flex.styled';
import ScheduleAppointmentButton from '../../../../components/ScheduleAppointmentButton';

library.add(fas);

const PromotionCard = ({ margin, icon, iconColor, title, text}) => {
    const theme = useTheme();
    
    return (
        <Card $margin={margin} $width='20rem' $alignItems='center' $padding='2rem' $backgroundColor='white'>
            <Flex $gap='1rem' $alignItems='center' $justifyContent='center'>
                <FontAwesomeIcon icon={['fas', icon]} size='2x' color={iconColor} />
                <SubHeading $color={theme.colors.primary.main}>{title}</SubHeading>
            </Flex>
            <Text $whiteSpace='break-spaces'>{text}</Text>
            <ScheduleAppointmentButton />
        </Card>
    );
};

export default PromotionCard;