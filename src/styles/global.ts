import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0px;
        margin:0px;
        box-sizing: border-box;        
    }

    body{
        color: ${ ( { theme } ) => theme.colors.textColor};
        font-family: 'Open Sans';
        line-height: 140%;
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        font-size: 18px;
        transition: background-color .2s linear;
    }

    h1,h2,h3,h4,h5,h6{
        color: ${ ( { theme } ) => theme.colors.title};
        font-family: "Cinzel Decorative", 'Open Sans', sans-serif;
        font-weight: 700;
        font-style: normal;

    }

    img{
        width: 100%
    }
`
