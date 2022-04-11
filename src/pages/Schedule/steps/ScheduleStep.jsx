import Calendar from '../../../components/Calendar/Calendar';
import { useEffect, useState } from 'react';
import { Flex } from '../../../components/Flex.styled';
import TimeSlots from '../../../components/Calendar/TimeSlots';
import { useForm } from '../../../contexts/FormContext';

const ScheduleStep = ({ name, onChange }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [data, setData] = useForm();

    useEffect(() => {
        console.log(time);
        setData(prevData => ({...prevData, date: time }));
    }, [time]);

    const handleTimeSlotChange = (value) => {
        setTime(value);
    };

    const handleDateChange = (value) => {
        setDate(value);
    };

    return (
        <Flex $gap='1rem'>
            <Calendar onChange={handleDateChange} />
            {date && <TimeSlots date={date} onChange={handleTimeSlotChange} />}
        </Flex>
    );
};

export default ScheduleStep;
