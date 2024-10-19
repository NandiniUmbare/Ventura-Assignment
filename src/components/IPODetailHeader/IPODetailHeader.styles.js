import styled from 'styled-components';
import { GrDocumentDownload } from "react-icons/gr";

export const Container = styled.div`
    display: flex;
    margin: 2rem;
    justify-content: space-between;
    align-items: center;
`;

export const BackButton = styled.div`
    width: 3rem;
    height: 3rem;
    border: 1px solid lightgray;
    border-radius: 25%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    font-size: 32px;
    margin-right: 2rem;
    cursor: pointer;
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const CompanyName = styled.div`
    display: flex;
    gap: 3%;
    width: 100%;
`;

export const Logo = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
`;

export const CompanyTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
`;

export const NavLeft = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const NavRight = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const DownloadButton = styled(GrDocumentDownload)`
    width: 3rem;
    height: 3rem;
    color: red;
    cursor:pointer;
`;
export const ApplyButton = styled.div`
    background: #29445c;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15%;
    padding: 1rem;
    margin-left: 3rem;
    cursor:pointer;
`;