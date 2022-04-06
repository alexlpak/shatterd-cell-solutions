import { Button } from './Button.styled';
import { RouterLink } from './RouterLink.styled';

const ScheduleAppointmentButton = () => {
    return (
        <RouterLink to='/schedule'>
            <Button $primary>Schedule Appointment</Button>
        </RouterLink>
    );
};

export default ScheduleAppointmentButton;