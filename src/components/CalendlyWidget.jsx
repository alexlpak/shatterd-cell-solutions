import styled from 'styled-components';

const CalendlyStyled = styled.iframe.attrs({
    src: 'https://calendly.com/shatterdcell?primary_color=0085DC&embed_type=Inline&embed_domain=1',
    title: 'Calendly widget - schedule an appointment'
})`
    height: 120vh;
    width: 100%;
    overflow: hidden;
`;

const CalendlyWidget = () => {
    return <CalendlyStyled />;
};

export default CalendlyWidget;