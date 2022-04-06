import { CircleButton } from '../Button.styled';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DaysOfTheWeek = () => {
    return (
        WEEK_DAYS.map(day => {
            return (
                <CircleButton
                    key={day}
                    $backgroundColor='white'
                    $noHover
                >
                    {day[0].toUpperCase()}
                </CircleButton>
            );
        })
    );
};

export default DaysOfTheWeek;