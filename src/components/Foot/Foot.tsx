import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/bg.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  icon: {
    marginBottom: -5,
    color: "#BCBCBC",
  },
  copyright: {
    color: "#BCBCBC",
  },
}));

function Foot() {
  const classes = useStyles();
  
  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={12} lg={12}>
        <Typography align="center" variant="body1" className={classes.copyright}>
          <Copyright className={classes.icon}/>{" "}2022 9 Technical service co., ld
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Foot;
