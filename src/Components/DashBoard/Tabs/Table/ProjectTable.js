import UiTable from "../../../UI/UiTable";

const ProjectTable = () => {
  const headers = [{ head: "Project Name" }, { head: "Project Description" }];
  const details = [{ detail: "UX Design" }, { detail: "Build seamless UX" }];
  return (
    <>
      <UiTable th={headers} td={details}></UiTable>
    </>
  );
};
export default ProjectTable;
