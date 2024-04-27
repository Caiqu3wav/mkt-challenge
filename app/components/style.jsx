import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #0055ff;
    display: flex;
    justify-content: space-between; 
    padding-left: 50px;
    padding-right: 50px;
    height: 101px;
    align-items: center;

     h1{
        font-size: 40px;
        color: white;
    }

    h1 span{
        font-size: 20px;
        color: white;
    }
`;

export const StyledHero = styled.div`
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ProductCardStyled = styled.div`
    display: flex;
    width: 218px;
    height: 285px;
    align-items: center;
    justify-content: space-between;
    color: black;

    .name-price{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
    }

    .name-price p{
        color: white;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 15px;
    }
`