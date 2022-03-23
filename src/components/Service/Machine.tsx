import { Container, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import Image from "../../models/Image";
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
    '@media (min-width:300px)': {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.75rem',
    }
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

function Machine() {
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
            งานซ่อมเครื่องจักรอุตสาหกรรม | Machine Maintainance Services
          </Typography>
          <Divider className={classes.divider}/>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon}  />{" "}
            ติดตั้งและซ่อมแซม Inverter, PLC, Controller Board, AC/DC Servo Drive etc.
          </Typography>
          <Typography align="left" variant="body1">
            (Equipment and Repair Inverter, PLC, Controller Board, AC/DC Servo Drive etc.)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon}  />{" "}
            ปรับปรุงโปรแกรมควบคุมเครื่องจักร วงจร Relay, PLC program
          </Typography>
          <Typography align="left" variant="body1">
            (Modify Relay Monitoring, PLC program)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon}  />{" "}
            รับซ่อมเครื่องจักร ระบบไฟฟ้า, แมคคานิค, นิวเมติก, ไฮดรอลิก
          </Typography>
          <Typography align="left" variant="body1">
            (Repair Electrical, Mechanical, Pneumatic, Hydraulic Machines)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon}  />{" "}
            รับทำ Preventive Maintenance เครื่องจักรทุกชนิด
          </Typography>
          <Typography align="left" variant="body1">
            (Preventive Maintenance of all types of Machines)
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Machine;
