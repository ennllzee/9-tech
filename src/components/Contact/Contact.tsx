import {
  Grid,
  IconButton,
  Link,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import {
  AlternateEmail,
  Business,
  Facebook,
  Language,
  LocalPhone,
  LocalShipping,
  LocalShippingOutlined,
  MeetingRoom,
  MeetingRoomOutlined,
} from "@material-ui/icons";
import { ContentCopy, QrCode } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
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
  copy: {
    color: "white",
  },
  alert: {
    position: "fixed",
    bottom: theme.spacing(5),
  },
}));

function Contact() {
  const classes = useStyles();
  const [line, setLine] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const copy = (content: string) => {
    navigator.clipboard.writeText(content);
    setAlert(true);
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [alert]);

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
              <MeetingRoom className={classes.icon} fontSize="small" />{" "}
              สำนักงานใหญ่: 55/293 ซอยประเสริฐมนูกิจ 42 ถนนประเสริฐมนูกิจ
              แขวงนวมินทร์ เขตบึงกุ่ม กรุงเทพฯ 10230{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  className={classes.copy}
                  onClick={() =>
                    copy(`55/293 ซอยประเสริฐมนูกิจ 42 ถนนประเสริฐมนูกิจ
                    แขวงนวมินทร์ เขตบึงกุ่ม กรุงเทพฯ 10230`)
                  }
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs={2} md={2} lg={2}></Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="body1" className={classes.sub}>
              <MeetingRoomOutlined className={classes.icon} fontSize="small" /> Head
              Office: 55/293 Soi Prasert-Manukitch 42, Prasert-Manukitch Rd.,
              Nawamin, Khet Bueng Kum, Bangkok 10230{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  className={classes.copy}
                  onClick={() =>
                    copy(
                      `55/293 Soi Prasert-Manukitch 42, Prasert-Manukitch Rd., Nawamin, Khet Bueng Kum, Bangkok 10230`
                    )
                  }
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs={2} md={2} lg={2}></Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="body1" className={classes.sub}>
              <LocalShipping className={classes.icon} fontSize="small" />{" "}
              ที่อยู่ส่งเอกสาร / สินค้า: 70/535 หมู่บ้านประชานิเวศน์ 2
              ซอยสามัคคี 58/20 ถนนสามัคคี แขวงท่าทราย เขตนนทบุรี จังหวัดนนทบุรี
              11000{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  className={classes.copy}
                  onClick={() =>
                    copy(`70/535 หมู่บ้านประชานิเวศน์ 2
                  ซอยสามัคคี 58/20 ถนนสามัคคี แขวงท่าทราย เขตนนทบุรี จังหวัดนนทบุรี
                  11000`)
                  }
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs={2} md={2} lg={2}></Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="body1" className={classes.sub}>
              <LocalShippingOutlined className={classes.icon} fontSize="small" />{" "}
              Workshop: 70/535 Prachaniwet 2 Soi Samakkee 58/20 Samakkee Rd.,
              Tha Sai, Muang Nonthaburi, Nonthaburi 11000{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  className={classes.copy}
                  onClick={() =>
                    copy(`70/535 Prachaniwet 2 Soi Samakkee 58/20 Samakkee Rd., Tha Sai, Muang Nonthaburi, Nonthaburi
                    11000`)
                  }
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
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
            <Typography align="left" variant="body1" className={classes.sub}>
              086 324 6039{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  className={classes.copy}
                  onClick={() => copy("0863246039")}
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>{" "}
              / 097 121 1810{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  className={classes.copy}
                  onClick={() => copy("0971211810")}
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
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
            <Typography align="left" variant="body1" className={classes.sub}>
              sales-nt@hotmail.com{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  className={classes.copy}
                  onClick={() => copy("sales-nt@hotmail.com")}
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
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
            <Typography align="left" variant="body1" className={classes.sub}>
              บริษัท นายน์ เทคนิคอล เซอร์วิส จำกัด{" "}
              <Tooltip title="Go to Link">
                <IconButton
                  size="small"
                  className={classes.copy}
                  href="https://web.facebook.com/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%8C-%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84%E0%B8%AD%E0%B8%A5-%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B8%AA-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94-120307878337801"
                  target="_blank"
                >
                  <Language fontSize="small" />
                </IconButton>
              </Tooltip>
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
            <Link
              underline="hover"
              onClick={() => setLine(true)}
              className={classes.sub}
            >
              <Typography>CLICK HERE</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Line open={line} setOpen={setLine} />
      {alert && (
        <Alert severity="success" className={classes.alert}>
          <Typography> คัดลอกสำเร็จ! </Typography>
        </Alert>
      )}
    </Grid>
  );
}

export default Contact;
