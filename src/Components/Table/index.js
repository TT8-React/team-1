import React from "react";
import {
  Table,
  TableBody,
  TableField,
  TableHead,
  TableRow,
  TableTitle,
} from "./table.styles";
import tableData from "./data.js";

let nextId = 1;

function Index() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableData.header.map((item) => (
            <TableTitle>{item}</TableTitle>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(tableData.rows).map((row) => (
          <TableRow key={nextId++}>
            {tableData.rows[row].map((rowField) => (
              <TableField key={nextId++}>{rowField}</TableField>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Index;
