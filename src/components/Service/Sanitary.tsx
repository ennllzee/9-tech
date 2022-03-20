import { Container, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import Image from "../../models/Image";
import CarouselShow from "./CarouselShow";

const useStyles = makeStyles((theme) => ({
  sub: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/sanitary.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    color: "white",
  },
  icon: {
    marginBottom: -5,
    color: "#FFC300",
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

function Sanitary() {
  const classes = useStyles();
  const sanitary: Image[] = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL + "/pic/41.jpg"}`,
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL + "/pic/42.jpg"}`,
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL + "/pic/07.jpg"}`,
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL + "/pic/14.jpg"}`,
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
      <Grid item xs={12} md={12} lg={3}>
        <CarouselShow pics={sanitary} />
      </Grid>
      <Grid item xs={12} md={12} lg={9} className={classes.subtitle}>
        <Container>
          <Typography align="left" variant="h5">
            งานระบบประปาและสุขาภิบาล | Sanitary System
          </Typography>
          <Divider className={classes.divider}/>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon} fontSize="small" />{" "}
            ออกแบบ ติดตั้ง ปรับปรุง แก้ไข ระบบประปาและสุขาภิบาล
          </Typography>
          <Typography align="left" variant="body1">
            (Design, Installation, Improvement of Water and Sanitation Systems)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon} fontSize="small" />{" "}
            ตรวจสอบคุณภาพและความหนาของท่อ ติดตั้งปั๊ม Overhaul Pump
          </Typography>
          <Typography align="left" variant="body1">
            (Check the Quality and Thickness of the Pipe, Install the Overhaul Pump)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon} fontSize="small" />{" "}
            งานติดต่อท่อน้ำ PPR, HDPE, ระบายน้ำฝน
          </Typography>
          <Typography align="left" variant="body1">
            (Installation of PPR, HDPE Water Pipes, Rainwater Drainage)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon} fontSize="small" />{" "}
            บริการปรับปรุงระบบระบายอากาศ ภายในอาคารสูง
          </Typography>
          <Typography align="left" variant="body1">
            (Ventilation System Improvement Services Inside the High Building)
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Sanitary;
