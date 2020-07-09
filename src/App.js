import React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
// APi Data Providers
import simpleRestProvider from "./providers/ra-strapi-rest";
import authProvider from "./providers/authProvider";

//Traducciones
import polyglotI18nProvider from "ra-i18n-polyglot";
import spanishMessages from "@blackbox-vision/ra-language-spanish";
import myMessages from "../src/utils/myMessages";

//Temas y estilos
import theme from "./utils/theme";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";

//Iconos
import PatientIcon from "@material-ui/icons/AssignmentInd";
import DiagnosisIcon from "@material-ui/icons/Assignment";
import TreatmentIcon from "@material-ui/icons/AssignmentTurnedIn";
import AppointmentIcon from "@material-ui/icons/DateRange";
import EventIcon from "@material-ui/icons/Event";
import MedicIcon from "@material-ui/icons/LocalHospital";
import StaffIcon from "@material-ui/icons/PermContactCalendar";

//Contenedores
import { PatientList } from "./containers/patients";
import {
  EventoList,
  EventoEdit,
  EventoCreate,
  EventoShow,
} from "./containers/eventos";

// const i18nProvider = polyglotI18nProvider(locale => messages[locale]);
const messages = {
  es: {
    ...spanishMessages,
    myMessages,
  },
};
const i18nProvider = polyglotI18nProvider(() => spanishMessages, "es");
const dataProvider = simpleRestProvider("http://localhost:1337");

const App = () => (
  <Admin
    locale="es"
    messages={messages}
    theme={theme}
    dashboard={Dashboard}
    layout={Layout}
    login={LoginPage}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource
      name="citas"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={AppointmentIcon}
    />
    <Resource
      name="eventos"
      list={EventoList}
      edit={EventoEdit}
      create={EventoCreate}
      show={EventoShow}
      icon={EventIcon}
    />
    <Resource
      name="pacientes"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={PatientIcon}
    />
    <Resource
      name="medicos"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={MedicIcon}
    />
    <Resource
      name="practicantes"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={StaffIcon}
    />
    <Resource
      name="diagnosticos"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={DiagnosisIcon}
    />
    <Resource
      name="tratamientos"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={TreatmentIcon}
    />
  </Admin>
);

export default App;
