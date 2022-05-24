import axios from "axios";
import { useEffect, useState } from "react";
import { postApi } from "../../../Store/Database/DashData";
import UiTable from "../../../UI/UiTable";

const ProjectTable = () => {
  const [getName, setGetName] = useState();
  const [getDetails, setGetDetails] = useState();
  useEffect(() => {
    const fetchData = setTimeout(
      axios.get(postApi).then((response) => {
        const fetchedData = response.data;

        const values = Object.values(fetchedData);
        values.forEach((val) => {
          setGetName(val.projectName);
          setGetDetails(val.projectDescription);
        });
      }),
      1000
    );
    const clearFetchCache = () => {
      clearTimeout(fetchData);
    };
    clearFetchCache();
  }, [getName, getDetails]);
  const headers = [{ projectName: "Name", projectDescription: " Description" }];
  const details = [
    { userProjectName: getName, userProjectDetails: getDetails },
  ];
  return (
    <>
      <UiTable
        th={headers}
        td={details}
        // th={headers.map((val) => {
        //   return val.head;
        // })}
        // td={details.map((val) => {
        //   return val.projectName, val.projectDetails;
        // })}
      ></UiTable>
    </>
  );
};
export default ProjectTable;
