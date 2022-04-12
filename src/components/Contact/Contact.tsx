import {
  Grid,
  IconButton,
  Link,
  makeStyles,
  Snackbar,
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
  MeetingRoom,
  FileCopyOutlined
} from "@material-ui/icons";
import { Alert } from "@mui/material";
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
    fontSize: "1rem",
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
    fontSize: "0.75rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
  },
}));

interface ContactProps {
  data: any
}

function Contact({ data }: ContactProps) {
  const classes = useStyles();
  const [line, setLine] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const copy = (content: string) => {
    navigator.clipboard.writeText(content);
    setAlert(true);
  };

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
            <Typography align="left" variant="body1" className={classes.subtitle}>
              {data.company}
            </Typography>
          </Grid>
          <Grid item xs={2} md={2} lg={2}></Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="body1" className={classes.sub}>
              <MeetingRoom className={classes.icon} /> {data.addressTopic}{data.address}{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  onClick={() =>
                    copy(data.address)
                  }
                >
                  <FileCopyOutlined className={classes.copy}/>
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs={2} md={2} lg={2}></Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Typography align="left" variant="body1" className={classes.sub}>
              <LocalShipping className={classes.icon} /> {data.workshopTopic}{data.workshop}{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  onClick={() =>
                    copy(data.workshop)
                  }
                >
                  <FileCopyOutlined className={classes.copy}/>
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
                  onClick={() => copy("0863246039")}
                >
                  <FileCopyOutlined className={classes.copy}/>
                </IconButton>
              </Tooltip>{" "}
              / 097 121 1810{" "}
              <Tooltip title="Copy">
                <IconButton
                  size="small"
                  onClick={() => copy("0971211810")}
                >
                  <FileCopyOutlined className={classes.copy}/>
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
                  onClick={() => copy("sales-nt@hotmail.com")}
                >
                  <FileCopyOutlined className={classes.copy}/>
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
                  href="https://web.facebook.com/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%8C-%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84%E0%B8%AD%E0%B8%A5-%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B8%AA-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94-120307878337801"
                  target="_blank"
                >
                  <Language className={classes.copy}/>
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} md={10} lg={8} className={classes.box}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2} md={2} lg={2}>
            <Typography align="center" variant="body1" className={classes.subtitle}>
              LINE
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Link
              underline="hover"
              onClick={() => setLine(true)}
              className={classes.sub}
            >
              <Typography variant="body1">CLICK HERE  </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Line open={line} setOpen={setLine} />
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={() => setAlert(false)}
      >
        <Alert onClose={() => setAlert(false)} severity="success">
          <Typography variant="body1">copied!</Typography>
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Contact;
