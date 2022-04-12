import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    paddingTop: theme.spacing(10),
  },
  main: {
    // minHeight: "50vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/bg.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  title: {
    color: "white",
    fontSize: '2rem',
    '@media (min-width:300px)': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5rem',
    }
  },
  body: {
    color: "white",
    padding: "3%",
    textIndent: "1.5rem",
  },
}));

interface FoundationProps {
  data: any
}

function Foundation({ data }: FoundationProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.main}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography align="center" variant="h3" className={classes.title}>
            FOUNDATION
          </Typography>
        </Grid>

        <Grid item xs={10} md={10} lg={8}>
          <Typography
            align="inherit"
            variant="body1"
            className={classes.body}
            paragraph={true}
          >
            {data}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Foundation;
