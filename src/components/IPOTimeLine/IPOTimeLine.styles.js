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

export const TimeLine = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media screen and (max-width: 480px) {
        padding-left: 0;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const TimelineEvent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @media screen and (max-width: 480px) {
        align-items: flex-start;
        margin-bottom: 20px;
        flex-direction: row;
    }
`;

export const TimelineIcon = styled.div`
    background-color: #4CAF50;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 480px) {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`;

export const TimelineDetails = styled.div`
    margin-top: 10px;
    text-align: center;
    @media screen and (max-width: 480px) {
        margin-top: 0;
        text-align: start;
    }
`;

export const EventTitle = styled.div`
    font-weight: bold;
`;

export const EventDate = styled.div`
    color: gray;
`;

export const TimelineLine = styled.div`
    width: 266px;
    height: 2px;
    background-color: #4CAF50;
    position: absolute;
    top: 20px;
    left: 106%;
    transform: translate(-50%);
    @media screen and (max-width: 480px) {
        width: 2px;
        height: 50px;
        left: 15px;
        top: 30px;
    }
`;