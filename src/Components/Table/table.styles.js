import styled, { css } from "styled-components";

// ====================================
// css units

// $border-color: black;

const tableRow = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* gap: 4.5rem; */
  /* background-color: #e5e5e5; */
`;

const tableCell = css`
  padding-block: 0.6rem;
  padding-inline: 1.5rem;
  border: 1px solid;
  /* border-bottom: 1px solid black; */
  /* width: 100%; */

  /* &:not(:first-child) {
    border-left: 1px solid black;
  } */
`;
// ====================================
// styled components

export const Table = styled.table`
  /* border: 1px solid black;
  border-bottom-color: transparent; */
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #828282;
  /* ${tableRow} */
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  /* ${tableRow}
  flex: 1; */
`;

export const TableTitle = styled.th`
  ${tableCell}
`;
export const TableField = styled.td`
  ${tableCell}/* text-align: center;  */
`;

export const ActionField = styled(TableField)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* height: 100%; */
  background-color: blue;
  /* align-items: stretch; */
  /* border: 1px solid black; */
`;
