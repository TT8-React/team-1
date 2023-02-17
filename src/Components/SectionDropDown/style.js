import styled from "styled-components";


const DropDownSection = styled.div`
    width: 401px;
    display: flex;
    flex-direction: column;
    /* margin-top: -0.5em; */

    img {
        width: 10px;
        height: 7px;
    }
`;

const DataSection = styled.div`
    width: 100%;
    height: 51px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #EDEDED;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 6px;
    margin-bottom: 19px;
    cursor: pointer;

    h2{
        margin-left: 1em;
    }

    img{
        padding: 0;
        margin: 0;
        margin-right: 1em;
    }
`;


const ListData = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    margin-top: -2px;
    margin-left: -5px;
    width: 100%;
    

    li{
        font-weight: 500;
        font-size: 18px;
        line-height: 19px;
        color: #000000;
        width: 368px;
        height: 51px;
        background-color: #EDEDED;
        border-radius: 6px;
        display: flex;
        

        span{
            display: flex;
            align-content:center;
            margin: auto 30px;
        }
        cursor: pointer;
    }
`;


const Title = styled.h2`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    padding: 0;
    margin: 0;
`;
export {DropDownSection , ListData , Title , DataSection};