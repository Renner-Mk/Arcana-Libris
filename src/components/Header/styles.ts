import styled from "styled-components";
import background1 from '../../assets/image/logo sem fundo.png'

export const Container = styled.div`
    display:flex;
    line-height: 1;
    justify-content:space-between;
    align-items:center;
    padding: 0 15px;
`

export const LogoName = styled.div`
    display:flex;
    align-items:center;
    gap:15px;
`

export const Imag = styled.div`
    height:90px;
    width:90px;
    background-image: url(${background1});
    background-size: contain;
    object-fit: contain;
`

export const NameLibrary = styled.h1`

   
`

export const Subtitulo = styled.p`
    color: ${ ( { theme }) => theme.colors.nav};
`