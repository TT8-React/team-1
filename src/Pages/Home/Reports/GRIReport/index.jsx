import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../Components/Buttons/Button';
import  ReportTable  from '../../../../Components/ReportTable';
import Lists from '../../../../Components/DropDownLists';

import {GRI , Data} from './style';

function Index() {
    const [change , setChange] = useState("/report");
    const back = ()=>{
        
        setChange("/report");
    }   

  return (
    <GRI>
        <Link to={change}>
            <Button background={"black"} color="white" name={"Back"} onClick={back}/>
        </Link>

        <Data>
            <Lists/>
            <ReportTable/>
        </Data>
    </GRI>
  )
}

export default Index;