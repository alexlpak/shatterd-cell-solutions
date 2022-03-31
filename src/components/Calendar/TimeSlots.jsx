import { useEffect, useState } from 'react';
import { Button } from '../Button.styled';
import { Text } from '../Text.styled';
import { Flex } from '../Flex.styled';
import useLocalStorage from '../../hooks/useLocalStorage';

const TimeSlots = ({timeSlots=['11:30 AM','12:00 PM','1:30 PM'], date, onChange, instructions }) => {
    const [selectedTime, setSelectedTime] = useLocalStorage('time-slot', '');

    const handleClick = (e) => {
        setSelectedTime(e.target.value);
    };

    useEffect(() => {
        onChange && onChange({ date: date, time: selectedTime });
    }, [selectedTime]);

    return (
        <Flex flexDirection='column' gap='1rem'>
            {instructions && <Text fontWeight={600}>{instructions}</Text>}
            <Flex alignItems='center' gap='1rem'>
                {timeSlots.map(time => <Button primary={time === selectedTime} key={time} value={time} onClick={handleClick}>{time}</Button>)}
            </Flex>
        </Flex>
    );
};

export default TimeSlots;
