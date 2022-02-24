import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    background: "rgba(0, 0, 0, 0.5)",
  },
  tab: {
    color: "white",
    "& .MuiTabs-indicator": {
      backgroundColor: "#FF5733",
    },
  },
  top: {
    padding: 0,
    margin: 0,
    maxWidth: "100vw",
  },
}));

interface PageProps{
  page: string
  setPage: any
}

export default function Page({page, setPage} : PageProps) {

  const handleChange = (event: any, newValue: any) => {
    setPage(newValue);
  };

  const classes = useStyles();

  const jump = (name: string) => {
    const page = document.getElementById(name);
    page?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Tabs
        value={page}
        onChange={handleChange}
        variant="fullWidth"
        className={classes.tab}
      >
        <Tab label="Home" value="home" onClick={() => jump('home')}/>
        <Tab label="Foundation" value="foundation" onClick={() => jump('foundation')}/>
        <Tab label="Services" value="service" onClick={() => jump('service')}/>
        <Tab label="Contact" value="contact" onClick={() => jump('contact')}/>
      </Tabs>
    </AppBar>
  );
}
