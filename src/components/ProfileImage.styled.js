import styled, { css } from 'styled-components';
import { Image } from './Image.styled';

export const ProfileImage = styled(Image)`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    ${props => {
        return props.size && css`
            height: ${props.size};
            width: ${props.size};
        `;
    }};
`;