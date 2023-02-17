import styled from "styled-components";

const ReportTable = styled.table`
    width:728px;
    height: 584px;
    border: 1px solid #D0D0D0;
    border-collapse: collapse;
    padding: 0;
    margin: 0;

    tbody{
        border: 1px solid #D0D0D0;

     
        #number{
            align-content: center;
            width: 100px;
            /* height: 48px; */
            border: 1px solid #D0D0D0;    
            
            span{
                margin-left: 18px;
            }
        }

        #data{
            /* width: 621px; */
            /* height: 48px; */
            align-content: center;
            border: 1px solid #D0D0D0;   
            
            span{
                margin-left: 21px;
            }

        }
    }
`;

export {ReportTable};