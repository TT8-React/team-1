import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../Components/Buttons/Button';
import  ReportTable  from '../../../../Components/ReportTable';
import Lists from '../../../../Components/DropDownLists';

import {SEBI , Data} from './style';

function Index() {
    const [change , setChange] = useState("/report")
    const back = ()=>{
        setChange("/report");
    }   

  return (
    <SEBI>
        <Link to={change}>
            <Button background={"black"} color="white" name={"Back"} onClick={back}/>
        </Link>

        <Data>
            <Lists/>
            <ReportTable/>
        </Data>
    </SEBI>
  )
}

export default Index;