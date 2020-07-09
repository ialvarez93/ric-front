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
import { CitaList, CitaShow, CitaEdit, CitaCreate } from "./containers/citas";
import {
  MedicoList,
  MedicoEdit,
  MedicoCreate,
  MedicoShow,
} from "./containers/medicos";
import {
  PracticanteList,
  PracticanteEdit,
  PracticanteCreate,
  PracticanteShow,
} from "./containers/practicantes";
import {
  EventoList,
  EventoEdit,
  EventoCreate,
  EventoShow,
} from "./containers/eventos";
import {
  DiagnosticoList,
  DiagnosticoEdit,
  DiagnosticoCreate,
  DiagnosticoShow,
} from "./containers/diagnosticos";
import {
  TratamientoList,
  TratamientoEdit,
  TratamientoCreate,
  TratamientoShow,
} from "./containers/tratamientos";
import { PacienteList } from "./containers/pacientes";

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
      list={CitaList}
      edit={CitaEdit}
      create={CitaCreate}
      show={CitaShow}
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
      list={PacienteList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={PatientIcon}
    />
    <Resource
      name="medicos"
      list={MedicoList}
      edit={MedicoEdit}
      create={MedicoCreate}
      show={MedicoShow}
      icon={MedicIcon}
    />
    <Resource
      name="practicantes"
      list={PracticanteList}
      edit={PracticanteEdit}
      create={PracticanteCreate}
      show={PracticanteShow}
      icon={StaffIcon}
    />
    <Resource
      name="diagnosticos"
      list={DiagnosticoList}
      edit={DiagnosticoEdit}
      create={DiagnosticoCreate}
      show={DiagnosticoShow}
      icon={DiagnosisIcon}
    />
    <Resource
      name="tratamientos"
      list={TratamientoList}
      edit={TratamientoEdit}
      create={TratamientoCreate}
      show={TratamientoShow}
      icon={TreatmentIcon}
    />
  </Admin>
);

export default App;
