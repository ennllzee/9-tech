import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Contact from "./components/Contact/Contact";
import eng from "./components/Data/EngData";
import thai from "./components/Data/ThaiData";
import Foot from "./components/Foot/Foot";
import Foundation from "./components/Foundation/Foundation";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Page from "./components/TabPanel";
import Data from "./models/Data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      color: "white"
    },
    orange: {
      padding: 0,
      color: "#FF5733",
    },
    white: {
      padding: 0,
      color: "white",
    },
  })
);

function App() {
  const [offset, setOffset] = useState(document.documentElement.scrollTop);
  const [cookies, setCookie] = useCookies(["language"]);
  const [lang, setLang] = useState<string>(
    cookies.language !== undefined ? cookies.language : "en"
  );

  const [data,setData] = useState<Data>(lang === 'th' ? thai : eng)

  useEffect(() => {
    if(lang === 'th'){
      setData(thai)
    }else{
      setData(eng)
    }
  },[lang])

  window.onscroll = (e: any) => {
    setOffset(document.documentElement.scrollTop);
  };

  const [value, setValue] = useState<string>("home");
  const classes = useStyles();

  useEffect(() => {
    var home = document.getElementById("home")?.scrollHeight;
    var foundation = document.getElementById("foundation")?.scrollHeight;
    var service = document.getElementById("service")?.scrollHeight;
    if (home !== undefined && offset > home - (home/3)) {
      if (
        service !== undefined &&
        foundation !== undefined &&
        offset <= home + foundation + service - (foundation/3)
      ) {
        if (offset <= home + service - (service/3)) {
          setValue("service");
        } else {
          setValue("foundation");
        }
      } else {
        setValue("contact");
      }
    } else {
      setValue("home");
    }
  }, [offset]);

  return (
    <div>
      <main>
        <Page page={value} setPage={setValue} />
        <div id="home">
          <Home />
        </div>
        <div id="service">
          <Service data={data.service}/>
        </div>
        <div id="foundation">
          <Foundation data={data.foundation}/>
        </div>
        <div id="contact">
          <Contact data={data.contact}/>
        </div>
        <div>
          <Foot />
        </div>
        <Box className={classes.fab}>
          <Button
            onClick={() => {
              setLang("th");
              setCookie("language","th")
            }}
            className={lang === "th" ? classes.orange : classes.white}
            size="small"
          >
            <Typography variant="body1">TH</Typography>
          </Button>
          |
          <Button
            onClick={() => {
              setLang("en");
              setCookie("language","en")
            }}
            className={lang === "en" ? classes.orange : classes.white}
            size="small"
          >
            <Typography variant="body1">EN</Typography>
          </Button>
        </Box>
      </main>
    </div>
  );
}

export default App;
