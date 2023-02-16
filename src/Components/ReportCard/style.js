import styled from "styled-components";

const ReportCard = styled.div`
    width:302px;
    height:169px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 41px;
    border-radius: 6px;
    background-color: #D9D9D9;
    cursor: pointer;
`;


const GrayBox = styled.div`
    width: 57px;
    height: 48px;
    background-color: #A5A5A5;
    cursor: pointer;
`;

const ReportTitle = styled.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;

export {ReportCard , GrayBox , ReportTitle}