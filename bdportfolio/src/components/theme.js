import { createTheme, } from '@mui/material';


const theme = createTheme({
    palette: {
        primary: {
            main: '#00bcd4',
            dark: "#0097a7",
            light: "#B2EBF2",
        },
        secondary: {
            main: '#ff4081',
        },
        info: {
            main: '#6c51bf',
        },
        background: {
            // default: 'rgba(255,255,255,0.86)',
            default: '#6c51bf',
            paper: '#ffffff',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        },
    },
});

export default theme;