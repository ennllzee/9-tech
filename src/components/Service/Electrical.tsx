import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  AssignmentTurnedIn,
} from "@material-ui/icons";
import Image from "../../models/Image";
import CarouselShow from "./CarouselShow";

const useStyles = makeStyles((theme) => ({
  sub: {
    color: "white",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/electrical.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
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
    background: "white",
    marginTop: "1%",
    marginBottom: "1%",
  },
}));

function Electrical() {
  const classes = useStyles();
  const electrical: Image[] = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL + "/pic/01.jpg"}`,
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL + "/pic/32.jpg"}`,
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL + "/pic/28.jpg"}`,
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL + "/pic/44.jpg"}`,
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
        <CarouselShow pics={electrical} />
      </Grid>
      <Grid item xs={12} md={9} lg={9} className={classes.subtitle}>
        <Container>
          <Typography align="left" variant="h5">
            งานระบบไฟฟ้า | Electrical Systems
          </Typography>
          <Divider className={classes.divider} />
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon} />{" "}
            ตรวจสอบ ติดตั้ง ซ่อมแซม ไฟฟ้า แสงสว่าง บ้านเรือน อาคารหมู่บ้าน
            และโรงงานอุตสาหกรรม
          </Typography>
          <Typography align="left" variant="body1">
            (Inspect, Install, Repair, Electrical Systems, Lighting Systems,
            Houses, Buildings, Villages and Factories)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon} />{" "}
            ออกแบบ ติดตั้งระบบ ตู้สวตซ์บอร์ด MDB ตู้คอนโทรล Distribution Boards,
            ประกอบตู้คอนโทรล
          </Typography>
          <Typography align="left" variant="body1">
            (Design, System Installation, Switch Board, MDB, Distribution Boards, Control Cabinet)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon}  />{" "}
            บริการด้านระบบไฟฟ้ากำลัง และรับปรึกษาระบบไฟฟ้าทั่วไป
          </Typography>
          <Typography align="left" variant="body1">
            (Power System Services and General Electrical System Consulting)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon}  />{" "}
            งานความปลอดภัย CCTV IP Camera Motion Sensor
          </Typography>
          <Typography align="left" variant="body1">
            (Security System: CCTV, IP Camera Motion Sensor)
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Electrical;
