import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/00.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    height: "100vh",
  },
  title: {
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
  },
}));

function Home() {
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
        <Typography align="center" variant="h1" className={classes.title}>
          9 TECHNICAL SERVICE
        </Typography>
        <Typography align="center" variant="body1" className={classes.title}>
          บริษัท นายย์ เทคนิคอล เซอร์วิส จำกัด | 9 Technical service co., ld
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
