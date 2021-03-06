import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RouterLink = styled(Link)`
    color: ${({ $color }) => $color};
    &:hover {
        cursor: pointer;
    };
`;