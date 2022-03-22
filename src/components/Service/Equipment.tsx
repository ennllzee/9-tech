import { Container, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import Image from "../../models/Image";
import CarouselShow from "./CarouselShow";

const useStyles = makeStyles((theme) => ({
  sub: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/equipment.jpg"})`,
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
    background: "rgba(0, 0, 0, 0.5)",
  },
  divider: {
      background: 'white',
      marginTop: '1%',
      marginBottom: '1%'
  }
}));

function Equipment() {
  const classes = useStyles();
  const equipment: Image[] = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL + "/pic/22.jpg"}`,
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL + "/pic/10.jpg"}`,
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
        <CarouselShow pics={equipment} />
      </Grid>
      <Grid item xs={12} md={9} lg={9} className={classes.subtitle}>
        <Container>
          <Typography align="left" variant="h5">
            อุปกรณ์ไฟฟ้า | Electrical Equipment
          </Typography>
          <Divider className={classes.divider}/>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon} fontSize="small" />{" "}
            จัดหาอะไหล่อุตสาหกรรม และจำหน่ายอุปกรณ์ไฟฟ้าแบบครบวงจร
          </Typography>
          <Typography align="left" variant="body1">
            (Supply Industrial Parts and Sells a Full Range of Electrical Equipment)
          </Typography>
          <Typography align="left" variant="body1">
            <AssignmentTurnedIn className={classes.icon} fontSize="small" />{" "}
            ดูแลการบริการหลังการขาย
          </Typography>
          <Typography align="left" variant="body1">
            (Take Care of After-Sales Service)
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Equipment;
