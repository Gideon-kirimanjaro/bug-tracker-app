import { getThemeProps } from "@mui/system";
import { Table } from "react-bootstrap";

const UiTable = (props) => {
  return (
    <>
      <Table striped bordered hover size="md" variant="dark">
        <thead>
          <tr>
            {props.th.map((head) => {
              return <th className="">{head.head}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.td.map((details) => {
              return <td className="">{details.detail}</td>;
            })}
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default UiTable;
