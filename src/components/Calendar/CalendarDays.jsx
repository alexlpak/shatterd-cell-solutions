import { CircleButton } from '../Button.styled';
import { Grid } from '../Grid.styled';
import DaysOfTheWeek from './DaysOfTheWeek';
import styled from 'styled-components';
import { css } from 'styled-components';

const CalendarDay = styled(CircleButton)`
    background-color: white;
    ${props => props.selected && css`
        background-color: ${props.theme.colors.primary.main};
        color: white;
    `};
`;

const CalendarDays = ({ year, month, selectedDate, setSelectedDate }) => {
    const getCalendarDays = () => {
        const startDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month+1, 0).getDate();
        return {
            startDay: startDay,
            daysInMonth: daysInMonth
        };
    };

    const handleDayClick = (e) => {
        const { value } = e.target;
        setSelectedDate(prevValue => value === prevValue ? '' : value);
    };

    const getCalendarDayElements = () => {
        let day = 1;
        const { startDay, daysInMonth } = getCalendarDays();
        const daysArray = new Array(7 * 6).fill();
        return daysArray.map((item, index) => {
            const dateString = `${year}-${month+1}-${day}`;
            if (index >= startDay && day <= daysInMonth) {
                const element = (
                    <CalendarDay
                        selected={selectedDate === dateString}
                        value={dateString}
                        onClick={handleDayClick}
                        key={dateString}
                    >
                        {day}
                    </CalendarDay>
                );
                day += 1;
                return element;
            }
            else {
                return <CircleButton $noHover $backgroundColor='white' key={index} />;
            };
        })
    };

    return (
        <Grid
            $gridTemplateColumns='repeat(7, 3rem)'
            $gridTemplateRows='repeat(7, 3rem)'
            $gap='1rem'
        >
        <DaysOfTheWeek />
            {getCalendarDayElements()}
        </Grid>
    );
};

export default CalendarDays;