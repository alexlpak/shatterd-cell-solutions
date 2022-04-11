import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import DeviceInfoStep from './steps/DeviceInfoStep';
import ServiceStep from './steps/ServiceStep';
import ScheduleStep from './steps/ScheduleStep';

import CalendlyWidget from '../../components/CalendlyWidget';

const Schedule = () => {
    const theme = useTheme();
    const [step, setStep] = useState(0);

    const steps = [
        { view: <DeviceInfoStep />, label: 'Device' },
        { view: <ServiceStep />, label: 'Service' },
        { view: <ScheduleStep />, label: 'Schedule' },
    ];

    const navigate = useNavigate();
    
    const incrementStep = () => {
        setStep(prevStep => prevStep+1);
    };

    const decrementStep = () => {
        setStep(prevStep => prevStep-1);
    };

    return (
        <CalendlyWidget />
    );
};

export default Schedule