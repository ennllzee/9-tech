import { Button, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import {
  AlternateEmail,
  Business,
  Facebook,
  LocalPhone,
} from "@material-ui/icons";
import { QrCode } from "@mui/icons-material";
import { useState } from "react";
import Line from "./Line";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    backgroundColor: "black",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  title: {
    color: "#FF5733",
  },
  icon: {
    marginBottom: -5,
    color: "#FF5733",
  },
  subtitle: {
    color: "#FF5733",
  },
  box: {
    paddingTop: "2%",
  },
  sub: {
    color: "white",
  },
}));

function Contact() {
  const classes = useStyles();
  const [line, setLine] = useState<boolean>(false);

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item xs={12} md={12} lg={12}>
        <Typography align="center" variant="h3" className={classes.title}>
          CONTACT
        </Typography>
      </Grid>
      <Grid item xs={10} md={10} lg={8} className={classes.box}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2} md={2} lg={2}>
            <Typography align="center">
              <Business className={classes.icon} />
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="h6" className={classes.subtitle}>
              บริษัท นายน์ เทคนิคอล เซอร์วิส จำกัด
            </Typography>
          </Grid>
          <Grid item xs={2} md={2} lg={2}></Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="body1" className={classes.sub}>
              สำนักงานใหญ่: 55/293 ซอยประเสริฐมนูกิจ 42 ถนนประเสริฐมนูกิจ
              แขวงนวมินทร์ เขตบึงกุ่ม กรุงเทพฯ 10230
            </Typography>
          </Grid>
          <Grid item xs={2} md={2} lg={2}></Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="body1" className={classes.sub}>
              ที่อยู่ส่งเอกสาร / สินค้า: 70/535 หมู่บ้านประชานิเวศน์ 2
              ซอยสามัคคี 58/20 ถนนสามัคคี แขวงท่าทราย เขตนนทบุรี จังหวัดนนทบุรี
              11000
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} md={10} lg={8} className={classes.box}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2} md={2} lg={2}>
            <Typography align="center">
              <LocalPhone className={classes.icon} />
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="h6" className={classes.sub}>
              086 324 6039 / 097 121 1810
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} md={10} lg={8} className={classes.box}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2} md={2} lg={2}>
            <Typography align="center">
              <AlternateEmail className={classes.icon} />
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="h6" className={classes.sub}>
              sales-nt@hotmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} md={10} lg={8} className={classes.box}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2} md={2} lg={2}>
            <Typography align="center">
              <Facebook className={classes.icon} />
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="h6" className={classes.sub}>
              บริษัท นายน์ เทคนิคอล เซอร์วิสจำกัด
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} md={10} lg={8} className={classes.box}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2} md={2} lg={2}>
            <Typography align="center" className={classes.subtitle}>
              <QrCode className={classes.icon} fontSize="small" /> LINE
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Link underline="hover" onClick={() => setLine(true)} className={classes.sub}>
              CLICK HERE
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Line open={line} setOpen={setLine} />
    </Grid>
  );
}

export default Contact;
