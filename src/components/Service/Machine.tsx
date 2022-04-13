import { Container, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import Image from "../../models/Image";
import ServiceData from "../../models/ServiceData";
import CarouselShow from "./CarouselShow";

const useStyles = makeStyles((theme) => ({
  sub: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/machine.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    color: "white",
  },
  icon: {
    marginBottom: -5,
    color: "#FFC300",
    fontSize: '1rem',
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
  subtitle: {
    paddingTop: "2%",
    paddingBottom: "2%",
    background: "rgba(0, 0, 0, 0.7)",
  },
  divider: {
      background: 'white',
      marginTop: '1%',
      marginBottom: '1%'
  }
}));

interface MachineProps {
  data: ServiceData;
}

function Machine({ data }: MachineProps) {
  const classes = useStyles();
  const machine: Image[] = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL + "/pic/02.jpg"}`,
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL + "/pic/03.jpg"}`,
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL + "/pic/19.jpg"}`,
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL + "/pic/34.jpg"}`,
    },
  ];

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      className={classes.sub}
    >
      <Grid item xs={12} md={3} lg={3}>
        <CarouselShow pics={machine} />
      </Grid>
      <Grid item xs={12} md={9} lg={9} className={classes.subtitle}>
        <Container>
          <Typography align="left" variant="h5">
            {data.title}
          </Typography>
          <Divider className={classes.divider} />
          {data.service.map((m: string) => {
            return (
              <>
                <Typography align="left" variant="body1">
                  <AssignmentTurnedIn className={classes.icon} /> {m}
                </Typography>
              </>
            );
          })}
        </Container>
      </Grid>
    </Grid>
  );
}

export default Machine;
