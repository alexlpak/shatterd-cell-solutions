import styled from 'styled-components';

const CalendlyStyled = styled.iframe.attrs({
    src: 'https://calendly.com/shatterdcell?primary_color=0085DC&embed_type=Inline&embed_domain=1',
    title: 'Calendly widget - schedule an appointment'
})`
    height: 90rem;
    width: 100%;
`;

const CalendlyWidget = () => {
    return <CalendlyStyled />;
};

export default CalendlyWidget;