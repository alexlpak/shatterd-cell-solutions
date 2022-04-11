import { Flex } from '../Flex.styled';
import { useState, useEffect } from 'react';
import CalendarDays from './CalendarDays';
import CalendarTitleNav from './CalendarTitleNav';
import TimeSlots from './TimeSlots';

const Calendar = ({ onChange }) => {
    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();

    const [month, setMonth] = useState(thisMonth);
    const [year, setYear] = useState(thisYear);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        onChange && onChange(selectedDate);
    }, [selectedDate]);

    const decrementMonth = () => {
        setMonth(prevMonth => prevMonth === 0 ? 11 : prevMonth-1)
        month === 0 && setYear(prevYear => prevYear - 1);
    };

    const incrementMonth = () => {
        setMonth(prevMonth => prevMonth === 11 ? 0 : prevMonth + 1);
        month === 11 && setYear(prevYear => prevYear + 1);
    };

    const handleDayClick = (day) => {
        setSelectedDate(day);
    };
    
    return (
        <Flex $flexDirection='column' $gap='1rem' $alignItems='center' $justifyContent='center'>
            <CalendarTitleNav
                increment={incrementMonth}
                decrement={decrementMonth}
                month={month}
                year={year}
            />
            <CalendarDays
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                month={month}
                year={year}
                onDayClick={handleDayClick}
            />
        </Flex>
    );
};

export default Calendar;