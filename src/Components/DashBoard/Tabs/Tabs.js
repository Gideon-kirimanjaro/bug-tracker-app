import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Board from "./Dash/Board";
import Tickets from "./Tickets/Tickets";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  //console.log(">>>Checkbox", checkBox);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 210,
        margin: 10,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Dashboard" {...a11yProps(0)} />
        <Tab label="Tickets" {...a11yProps(1)} />
        <Tab label="Administration" {...a11yProps(2)} />
        <Tab
          label="Log Out"
          {...a11yProps(3)}
          onClick={() => {
            props.logOut(true);
          }}
        />
        <Tab />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Board
          liftData={(projectName, projectDescription, checkBox) => {
            props.tabData(projectName, projectDescription, checkBox);
          }}
        ></Board>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>
          <Tickets></Tickets>
        </h2>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Administration</h2>
      </TabPanel>
    </Box>
  );
}
