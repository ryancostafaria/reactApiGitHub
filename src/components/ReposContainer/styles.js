import styled from 'styled-components'

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: #B9BFEA;
    border-radius: 10px;
    border-bottom: 10px solid #000;
    margin-top: 15px;

    @media (max-width: 430px) {
        width: 300px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #0A0D66;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfReposContainer = styled.h2`
    width: 100%;
    height: 350px;
    padding: 10px;
    overflow-y: scroll;
`


export const Repo = styled.h2`
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #0A0D66;
    }
    p {
        font-size: 12px;
        font-weight: 400;
        color: #000;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px
    }
`