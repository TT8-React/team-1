import React from 'react';

import {UpperSection} from './style';
import {ReportPage}  from './style';
import {AllReports} from './style';

import Button from '../../../Components/Buttons/Button';
import ReportCard  from '../../../Components/ReportCard';
import Divider from '../../../Components/Divider';

import { Link } from 'react-router-dom';



function Index() {
    return (
        <ReportPage>
            <UpperSection>
                <Link to={"/report/customize-report"}>
                    <Button background={"black"} color="white" name={"Create report"}/>
                </Link>
            </UpperSection>

            <Divider/>
            
            <AllReports>
                <Link to={"/report/sebi-report"}>
                    <ReportCard option={"SEBI"}/>
                </Link>

                <Link to={"/report/gri-report"}>
                    <ReportCard option={"GRI"}/>
                </Link>

                <Link to={"/report/customize-report"}>
                    <ReportCard option={"Customize"}/>
                </Link>
            </AllReports>
        </ReportPage>
    )
}

export default Index
