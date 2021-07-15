import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 0 11%;
`;

export const Title = styled.h1`
    align-self: flex-start;
    font-size: 40px;
    line-height: 50px;
`;

export const MainBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
        height: 350px;
        margin-left: 50px;
    }
`;

export const Form = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;