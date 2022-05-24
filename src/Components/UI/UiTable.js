import { Table } from "react-bootstrap";

const UiTable = (props) => {
  return (
    <>
      <Table striped bordered hover size="md" variant="dark">
        <thead>
          <tr>
            <th>
              {props.th.map((val) => {
                return val.projectName;
              })}
            </th>
            <th>
              {props.th.map((val) => {
                return val.projectDescription;
              })}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {props.td.map((val) => {
                return val.userProjectName;
              })}
            </td>
            <td>
              {props.td.map((val) => {
                return val.userProjectDetails;
              })}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default UiTable;
