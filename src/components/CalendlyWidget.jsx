import { useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const CalendlyStyled = styled.div`
    height: 100vh;
    width: 100%;
`;

const CalendlyWidget = () => {
    const { emailUser } = useAuth();
    useEffect(() => {
        Calendly.initInlineWidget({
            url: 'https://calendly.com/alexlpak/30min',
            parentElement: document.getElementById('calendlyWidget'),
            prefill: {
                name: `${emailUser.firstName} ${emailUser.lastName}`,
                email: emailUser.email
            },
            utm: {}
        })
    }, []);
  return <CalendlyStyled id='calendlyWidget' />;
};

export default CalendlyWidget;