import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: 'Libre Franklin', sans-serif;
        font-size: 16px;
        color: ${(props) => props.theme.colors.veryDarkBlue};
    }
`;

export default GlobalStyles;
