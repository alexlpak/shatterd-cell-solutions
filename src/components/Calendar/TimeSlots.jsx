import { useEffect, useState } from 'react';
import { Button } from '../Button.styled';
import { Text } from '../Text.styled';
import { Flex } from '../Flex.styled';

const TimeSlots = ({timeSlots=['11:30 AM','12:00 PM','1:30 PM'], date, onChange, instructions }) => {
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDate, setSelectedDate] = useState(date);

    const handleClick = (e) => {
        const { value } = e.target;
        setSelectedTime(prevValue => value === prevValue ? '' : value);
    };

    useEffect(() => {
        if (date !== selectedDate) {
            setSelectedDate(date);
            setSelectedTime('');
        };
    });

    useEffect(() => {
        onChange && onChange({ date: date, time: selectedTime });
    }, [selectedTime]);

    return (
        <Flex $flexDirection='column' $gap='1rem'>
        <Flex $flexDirection='column' $gap='1rem'>
            <Text $fontWeight={600} $textAlign='center'>Available Time Slots</Text>
            <Text $textAlign='center'>{new Date(date).toDateString()}</Text>
        </Flex>
            <Flex $alignItems='center' $gap='1rem'>
                {timeSlots.map(time => <Button $primary={selectedDate === date && time === selectedTime} key={time} value={time} onClick={handleClick}>{time}</Button>)}
            </Flex>
        </Flex>
    );
};

export default TimeSlots;
