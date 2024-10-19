import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem;
    padding: 0 2rem 2rem;
    border-radius: 15px;
    border: 1px solid lightgray;
    @media screen and (max-width: 480px) {
        border: none;
        margin: 0.5rem;
    }
`;

export const DetailContainer = styled.div`
    display: flex;
    border-radius: 15px;
    padding: 1.5rem;
    flex-wrap: wrap;
    border: 1px solid lightgray;
    gap: 5%;
`;

export const Card = styled.div`
    width: 20%;
    @media screen and (max-width: 480px) {
        width: 45%;
    }
`;