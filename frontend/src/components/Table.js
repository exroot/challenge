import { Table as TableComponent } from "react-bootstrap";
import { TableItem } from "./TableItem";

export const Table = ({ data }) => {
  return (
    <TableComponent striped bordered hover>
      <thead>
        <tr style={{ borderBottom: "3px solid black" }}>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((line) => (
          <TableItem key={line.hex} {...line} />
        ))}
      </tbody>
    </TableComponent>
  );
};
