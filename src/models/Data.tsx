import ContactData from "./ContactData";
import ServiceData from "./ServiceData";

interface Data {
  service: {
    electrical: ServiceData;
    sanitary: ServiceData;
    machine: ServiceData;
    equipment: ServiceData;
  };
  foundation: string;
  contact: ContactData;
}

export default Data;
