import { useEffect } from 'react';

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