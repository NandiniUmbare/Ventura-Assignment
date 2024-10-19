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

export const DesktopView = styled.div`
    display: block;
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const MobileView = styled.div`
    display: none;
    @media screen and (max-width: 480px) {
        display: block;
    }
`;