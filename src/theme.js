import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
    colors: {
        blue: 'hsl(223, 87%, 63%)',
        paleBlue: 'hsl(223, 100%, 88%)',
        lightRed: 'hsl(354, 100%, 66%)',
        gray: 'hsl(0, 0%, 59%)',
        veryDarkBlue: 'hsl(209, 33%, 12%)',
    },
    fontWeights: {
        light: 300,
        semiBold: 600,
        bold: 700,
    },
    breakpoints: {
        xs: 'max-width: 600px',
        s: 'min-width: 601px',
        m: 'min-width: 768px',
        l: 'min-width: 992px',
        xl: 'min-width: 1200px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
