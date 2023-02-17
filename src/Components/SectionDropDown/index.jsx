import React, { useState } from 'react';

import { DataSection, DropDownSection, ListData, Title } from './style';

import {ReportSectionsData} from '../../Mock/mock';

import rightArrow from '../../assets/arrowRight.png';
import downArrow from '../../assets/arrowDown.png';


function Index({title , showState}) {
    const [showList, setShowList] = useState(showState);
    const show = () => {showList===true ? setShowList(false) : setShowList(true)};
    
  return (
    <DropDownSection>
        <DataSection  onClick={show}>
            <Title>{title}</Title>
            <img src={showList? downArrow : rightArrow} alt="arrow"/>
        </DataSection>

       { showList ?
        <ListData>
            {ReportSectionsData.map((item)=>
                <li key={item.id}><span>{item.info}</span></li>
            )}
        </ListData>
        :
        null
        }
    </DropDownSection>
  )
}

export default Index