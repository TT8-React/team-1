import React from 'react';

import {ReportTabelData} from '../../Mock/mock';
import { ReportTable } from './style';

const rows = [];

    rows.push(
        ReportTabelData.map((item , index) =>
        <tr key={index}>
                <td id='number'>
                    <span>
                        {item.id}
                    </span>
                </td>
                <td id='data'>
                    <span>
                        {item.data}
                    </span>
                </td>
         </tr>
        )
    );
  

function index() {
  return (
    <ReportTable>
        <tbody>
            {rows}
        </tbody>
    </ReportTable>
  )
}

export default index