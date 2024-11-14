import styled from "styled-components";

export const Thema = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: 'Cinzel', sans-serif; 

    display:flex;
    align-items:center;
    
    height: 30px;
    width: 60px; 
    margin-left: 15px;
    
    border:none;
    border-radius: 30px;

    /* padding: 5px; */
    cursor: pointer;

    .i, .i2{
        font-size: 20px;
    }    

    &.left{

        .i{
            
            display:none;
            /* position:absolute; */
            left: 7px;
            z-index: -9;
            
        }
        .i2{
            
            display:inline;
            /* position:absolute; */
            left: 6.6px;
            z-index: 1;
            
        }

        span{
            transform: translateX(0)
        }
    }
    &.right{
        position:relative;
        .i{
            display:inline;
            /* position:absolute; */
            z-index: -1;
            left: 0;
            
        }
        .i2{
            display:none;
            /* position:absolute; */
            z-index: -1;
            left: 0px;
            
        }

        span{
            transform: translateX(25px)
        }
    }

    span{
        display:flex;
        justify-content:center;
        align-items:center;
        height: 25px;
        width: 25px; 
        border-radius: 100%;
        background-color:red;
        transition: transform .5s ease;
        margin-left: 2px;

    }
`