import React from 'react';

import { ReportCard , ReportTitle , GrayBox } from './style';

function index({option}) {
  return (
    <ReportCard>
        <GrayBox/>
        <ReportTitle>{option} report</ReportTitle>
    </ReportCard>
  )
}

export default index;