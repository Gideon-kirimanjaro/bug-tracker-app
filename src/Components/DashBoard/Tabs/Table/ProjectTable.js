import { useEffect, useState } from "react";
import UiTable from "../../../UI/UiTable";
import { getDatabase, ref, child, get, remove } from "firebase/database";
import axios from "axios";
import { postApi } from "../../../Store/Database/DashData";
import { Table } from "react-bootstrap";
import { Button } from "bootstrap";
const ProjectTable = (props) => {
  const projectName = props.changeFn.pn;
  const projectDescription = props.changeFn.pd;
  const dataBase = getDatabase();

  const [details, setDetails] = useState([]);
  const [render, setRender] = useState(0);
  const dbRef = ref(getDatabase());
  useEffect(() => {
    axios
      .get(postApi)
      .then((response) => {
        const fetchedData = response.data;
        const values = Object.values(fetchedData);
        setDetails(values);
        console.log("The values>>", values);
      })
      .catch((error) => {
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    console.log("The re-render function", render);
  }, [projectName, projectDescription, dbRef, render]);
  const headers = [
    { heading: "projectName" },
    { heading: "projectDescription" },
    { heading: "Team Members" },
    { heading: "Delete" },
  ];
  const onDeleteItem = (id) => {
    remove(ref(dataBase, `project-data/${id}`));
    return setRender((prevItem) => {
      return { ...prevItem, render: render + 1 };
    });
  };
  return (
    <>
      {/* <UiTable th={headers} td={details}></UiTable> */}
      <Table striped bordered hover size="md" variant="dark">
        <thead>
          <tr>
            {headers.map((item) => {
              return <th>{item.heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {details.map((item, index) => {
            return (
              <>
                <tr key={item.key}>
                  <td>{item.projectName}</td>
                  <td>{item.projectDescription}</td>
                  <td> ~{item.projectCheck}</td>
                  <td>
                    <button
                      onClick={() => {
                        onDeleteItem(item.key);
                      }}
                      variant="danger"
                    >
                      delete
                    </button>
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
export default ProjectTable;
