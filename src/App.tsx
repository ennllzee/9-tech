import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Foot from "./components/Foot/Foot";
import Foundation from "./components/Foundation/Foundation";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Page from "./components/TabPanel";

function App() {
  const [offset, setOffset] = useState(document.documentElement.scrollTop);

  window.onscroll = (e: any) => {
    setOffset(document.documentElement.scrollTop);
  };

  const [value, setValue] = useState<string>("home");

  useEffect(() => {
    var home = document.getElementById("home")?.scrollHeight;
    var foundation = document.getElementById("foundation")?.scrollHeight;
    var service = document.getElementById("service")?.scrollHeight;

    if (home !== undefined && offset > home / 2) {
      if (foundation !== undefined && offset > home + foundation / 2) {
        if (service !== undefined && offset > home + foundation + service / 2) {
          setValue("foundation");
        } else {
          setValue("service");
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
          <Service />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="foundation">
          <Foundation />
        </div>
        <div>
          <Foot />
        </div>
      </main>
    </div>
  );
}

export default App;
