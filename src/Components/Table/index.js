import React from "react";
import {
  ActionField,
  Table,
  TableBody,
  TableField,
  TableHead,
  TableRow,
  TableTitle,
} from "./table.styles";
import tableData from "./data.js";
import { DeletIcon, EditTextIcon } from "../SVGs/icons";

let nextId = 1;

function Index() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableData.header.map((item) => (
            <TableTitle>{item}</TableTitle>
          ))}
          <TableTitle>Action</TableTitle>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(tableData.rows).map((row) => (
          <TableRow key={nextId++}>
            {tableData.rows[row].map((rowField) => (
              <TableField key={nextId++}>{rowField}</TableField>
            ))}
            <ActionField>
              <EditTextIcon />
              <DeletIcon />
            </ActionField>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Index;
