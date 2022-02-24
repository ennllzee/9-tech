import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    backgroundColor: "black",
    paddingTop: theme.spacing(10),
  },
  title: {
    color: "white",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography align="center" variant="h3" className={classes.title}>
          CONTACT
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Contact;
