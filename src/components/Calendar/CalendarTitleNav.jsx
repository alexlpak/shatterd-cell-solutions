import { Flex } from '../Flex.styled';
import { CircleButton } from '../Button.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../Text.styled';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const CalendarTitleNav = ({ increment, decrement, month, year }) => {
    return (
        <Flex
            $gap='1rem'
            $justifyContent='space-between'
            $alignItems='center'
            $width='100%'
        >
            <CircleButton size='3rem' backgroundColor='white' onClick={decrement}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </CircleButton>
            <Text $fontWeight={600} $textAlign='center'>{MONTHS[month]} {year}</Text>
            <CircleButton size='3rem' backgroundColor='white' onClick={increment}>
                <FontAwesomeIcon icon={faAngleRight} />
            </CircleButton>
        </Flex>
    );
};

export default CalendarTitleNav;