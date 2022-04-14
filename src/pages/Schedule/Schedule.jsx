import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import DeviceInfoStep from './steps/DeviceInfoStep';
import ServiceStep from './steps/ServiceStep';
import ScheduleStep from './steps/ScheduleStep';

import CalendlyWidget from '../../components/CalendlyWidget';

const Schedule = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <CalendlyWidget />
    );
};

export default Schedule