import styled from "styled-components";


export const List = styled.ul`
    list-style-type: none;
    display: flex;
    gap:20px;
    margin-right: 25px; 
`
export const FormSearch = styled.form`
    display: flex;
    .icon{
        color:${ ( { theme } ) => theme.colors.nav};
        transform: translate( 0, 0px);
    }

`

export const Buttom = styled.button`
    height: 30px;
    padding: 7px 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    /* border:2px solid ${({ theme }) => theme.colors.nav}; */
    font-family: 'Cinzel', sans-serif; 
    /* border-radius: 12px; */
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.2s ease;
    /* margin-left: 15px; */
    
    border-end-end-radius: 12px;
    border-start-end-radius: 12px;
    border: none;

    &:hover {
  transform: scale(1.05);
  /* background-color: #f3d8b0; */
}
`
 
export const Input = styled.input`
    border: none;
    padding: 7px 0 7px 15px;
    width: 350px;
    /* border-radius: 12px; */
    border-end-start-radius: 12px;
    border-start-start-radius: 12px;
    background-color: ${ ( { theme } ) => theme.colors.search};
    color: ${({ theme }) => theme.colors.secondary};
    /* font-size: 16px; */

    &:focus{
        outline: none;
    }

    &::placeholder{
        color: rgb(255, 255, 255, .5);
    }
`