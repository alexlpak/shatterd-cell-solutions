import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns};
    grid-template-rows: ${props => props.gridTemplateRows};
    grid-template: ${props => props.gridTemplate};
    grid-auto-rows: ${props => props.gridAutoRows};
    grid: ${props => props.grid};
    grid-row-start: ${props => props.gridRowStart};
    grid-column-start: ${props => props.gridColumnStart};
    grid-row-end: ${props => props.gridRowEnd};
    grid-column-end: ${props => props.gridColumnEnd};
    grid-row: ${props => props.gridRow};
    grid-column: ${props => props.gridColumn};
    grid-area: ${props => props.gridArea};
    row-gap: ${props => props.rowGap};
    column-gap: ${props => props.columnGap};
    gap: ${props => props.gap};
`;