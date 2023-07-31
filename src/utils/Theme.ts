import {DefaultTheme} from "styled-components";

export const Theme: DefaultTheme = {
    colors: {
        primary: '#0f172a',
        primary_light: '#131c31',
        secondary: '#7eadfc',
        white: '#fff',
        black: '#000',
        para_text_color: '#dcdcdc'
    },
    fonts: {
        family: 'DM Sans',
        weight: {
            regular: 400,
            medium: 500,
            bold: 700
        }
    },

    breakpoints: {
        mobile: '720px',
    }
}