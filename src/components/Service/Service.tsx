import { Grid, makeStyles, Typography } from "@material-ui/core";
import Electrical from "./Electrical";
import Equipment from "./Equipment";
import Machine from "./Machine";
import Sanitary from "./Sanitary";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    backgroundColor: "black",
    // paddingTop: theme.spacing(10),
  },
  title: {
    color: "black",
    padding: "1%",
    backgroundColor: "#FFC300",
  },
  sub: {
    backgroundColor: "white",
    color: "black",
  },
  icon: {
    marginBottom: -5,
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.75rem",
    },
  },
  divide: {
    backgroundColor: "#FFC300",
    padding: "1%",
  },
}));

interface ServiceProps {
  data: any;
}

function Service({ data }: ServiceProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={12} lg={12}>
        <Typography align="center" variant="h3" className={classes.title}>
          OUR SERVICES
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Electrical data={data.electrical}/>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.divide}></Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Sanitary data={data.sanitary}/>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.divide}></Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Machine data={data.machine}/>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.divide}></Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Equipment data={data.equipment}/>
      </Grid>
    </Grid>
  );
}

export default Service;
