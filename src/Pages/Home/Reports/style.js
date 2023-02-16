import styled from "styled-components";

const ReportPage = styled.div`

`;

const UpperSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;

    button{
        height: 40px;
        margin-right: 53px;
    }
`;

const AllReports = styled.div`
    display: flex;
    flex-direction: row;
    gap: 58px;
    margin-left: 43px;

    a{
        text-decoration: none;
    }


    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;  
    }

`;

export {ReportPage , UpperSection , AllReports}