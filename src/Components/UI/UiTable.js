import { remove, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const UiTable = (props) => {
  let passedData = props.td;
  const dataBase = getDatabase();
  useEffect(() => {
    function deleteData() {
      setTimeout(passedData, 500);
    }
    deleteData();
    const clearFn = () => {
      clearTimeout(deleteData);
      console.log("clear delete data");
    };
    clearFn();
  }, [passedData]);
  // const removeItem = (item) => {
  //   remove(ref(db, `project-data/${item.key}`));
  // };
  return (
    <>
      <Table striped bordered hover size="md" variant="dark">
        <thead>
          <tr>
            {props.th.map((item) => {
              return <th>{item.heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {passedData.map((item, key) => {
            return (
              <>
                <tr key={key}>
                  <td>{item.projectName}</td>
                  <td>{item.projectDescription}</td>

                  <td>
                    <Button
                      onClick={() => {
                        remove(ref(dataBase, `project-data/${item.key}`));
                      }}
                      variant="danger"
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default UiTable;
