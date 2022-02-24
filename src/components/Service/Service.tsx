import { Grid, makeStyles, Typography } from "@material-ui/core";
import Electrical from "./Electrical";
import Equipment from "./Equipment";
import Machine from "./Machine";
import Sanitary from "./Sanitary";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    backgroundColor: "black",
    paddingTop: theme.spacing(10),
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
  },
  divide: {
    backgroundColor: "#FFC300",
    padding: "1%",
  },
}));

function Service() {
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
        <Electrical/>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.divide}>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Sanitary/>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.divide}>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Machine/>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.divide}>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Equipment/>
      </Grid>
    </Grid>
  );
}

export default Service;
