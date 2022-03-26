import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        overscroll-behavior: none;
        font-family: Montserrat, sans-serif;
        font-size: 1rem;
        &:focus {
            outline: none;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
        &:visited {
            color: inherit;
        };
    }

    html {
        font-size: 14px;
        font-family: Montserrat, sans-serif;
    }

    body {
        overflow-x: hidden;
        line-height: normal;
    }
`;

export default GlobalStyle;