import styled from "styled-components";

export const TransactionTable = styled.table`
  height: auto;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  border: 1px solid orange;
  border-radius: 10px;

  color: #000000;
  font-size: 14px;
`;

export const TransactionHead = styled.thead`
  color: #000000;
  height: 38px;
  text-transform: uppercase;
  font-size: 12px;
  border: 1px solid orange;
`;

export const TransactionRow = styled.tr`
  height: 28px;
  text-transform: capitalize;
  border: 1px solid orange;
  background-color: orange;
`;

export const TransactionType = styled.td`
  text-align: center;
  border: 1px solid #ff6800;
`;
