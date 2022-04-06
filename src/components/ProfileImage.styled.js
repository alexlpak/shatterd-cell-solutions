import styled, { css } from 'styled-components';
import { Image } from './Image.styled';

export const ProfileImage = styled(Image)`
    background-color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    ${({ $size }) => {
        return $size && css`
            height: ${$size};
            width: ${$size};
        `;
    }};
`;