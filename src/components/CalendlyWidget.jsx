import { InlineWidget } from 'react-calendly';
import { useTheme } from 'styled-components';

const CalendlyWidget = () => {
    const theme = useTheme();

    return (
        <InlineWidget
            title='Calendly widget - schedule an appointment'
            styles={{
                height: '100vh'
            }}
            pageSettings={{
                primaryColor: theme.colors.primary.main.replace('#', '')
            }}
            url='https://calendly.com/alexlpak/30min'
        />
    );
};

export default CalendlyWidget;