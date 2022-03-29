import styled from 'styled-components';
import { Heading } from './Heading.styled';

export const SubHeading = styled(Heading).attrs({
    as: 'h2'
})`
    font-size: 1.5rem;
`;