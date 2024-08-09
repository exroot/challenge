export const TableItem = ({ hex, filename, text, number }) => {
  return (
    <tr>
      <td>{filename}</td>
      <td>{text}</td>
      <td>{number}</td>
      <td>{hex}</td>
    </tr>
  );
};
