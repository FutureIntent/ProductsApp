import { createTheme } from "@mui/material";

export const mediaQueries = {
    lg: '@media only screen and (max-width: 1200px)',
    md: '@media only screen and (max-width: 992px)',
    sm: '@media only screen and (max-width: 768px)',
    xs: '@media only screen and (max-width: 475px)'
};

export const mediaQueriesNumeric = {
    lg: 1200,
    md: 992,
    sm: 768,
    xs: 475
};

export const colors = {

};


export const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});