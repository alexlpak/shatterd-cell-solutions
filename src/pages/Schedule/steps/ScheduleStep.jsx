import Calendar from '../../../components/Calendar/Calendar';
import { useEffect, useState } from 'react';
import { Flex } from '../../../components/Flex.styled';
import TimeSlots from '../../../components/Calendar/TimeSlots';
import useLocalStorage from '../../../hooks/useLocalStorage';

const ScheduleStep = ({ name, onChange }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        setData(time);
    }, [time]);

    useEffect(() => {
        onChange && onChange({ [name]: data });
    }, [data]);

    const handleTimeSlotChange = (data) => {
        setTime(data);
    };

    return (
        <Flex gap='1rem'>
            <Calendar
                onChange={(value) => setDate(value)}
            />
            {date && <TimeSlots
                date={date}
                onChange={handleTimeSlotChange}
            />}
        </Flex>
    );
};

export default ScheduleStep;
