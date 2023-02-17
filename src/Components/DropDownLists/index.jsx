import React from 'react';

import styled from 'styled-components';
import  DropDownSection  from '../SectionDropDown';

const Lists = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`;

function index() {
  return (
    <Lists>
        <DropDownSection title={"Section A"} showState={true}/>
        <DropDownSection title={"Section B"} showState={false}/>
        <DropDownSection title={"Section C"} showState={false}/>
    </Lists>

  )
}

export default index