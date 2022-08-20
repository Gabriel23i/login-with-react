import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background: rgb(224, 224, 224);
`;

export const LoginPage = styled.div`
    margin: 16px;
    h1{
        display: flex;
        justify-content: center;
    }
`;

export const FormContainer = styled.div`
    display: flexbox;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 260px;
    border-radius: 5px;
    background-color: #696969;

    form > div {
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    header{
        margin-top: -50px;
    }
`;

export const Content = styled.div`
    padding: 2px;
`;

export const Input = styled.input`
    border-radius: 5px;
    display: flex;
`;

export const Button = styled.button`
    margin-top: 10px;
    padding: 2px;
    background-color: #D3D3D3;
    border-radius: 5px;
    cursor: pointer;

    :hover{
        background-color: #C0C0C0;
    }
`;
