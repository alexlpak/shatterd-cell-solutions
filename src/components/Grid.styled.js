import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({ $gridTemplateColumns}) => $gridTemplateColumns};
    grid-template-rows: ${({ $gridTemplateRows}) => $gridTemplateRows};
    grid-template: ${({ $gridTemplate}) => $gridTemplate};
    grid-auto-rows: ${({ $gridAutoRows}) => $gridAutoRows};
    grid: ${({ $grid}) => $grid};
    grid-row-start: ${({ $gridRowStart}) => $gridRowStart};
    grid-column-start: ${({ $gridColumnStart}) => $gridColumnStart};
    grid-row-end: ${({ $gridRowEnd}) => $gridRowEnd};
    grid-column-end: ${({ $gridColumnEnd}) => $gridColumnEnd};
    grid-row: ${({ $gridRow}) => $gridRow};
    grid-column: ${({ $gridColumn}) => $gridColumn};
    grid-area: ${({ $gridArea}) => $gridArea};
    row-gap: ${({ $rowGap}) => $rowGap};
    column-gap: ${({ $columnGap}) => $columnGap};
    gap: ${({ $gap}) => $gap};
    align-items: ${({ $alignItems}) => $alignItems};
    justify-content: ${({ $justifyContent}) => $justifyContent};
`;