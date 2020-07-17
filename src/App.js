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
import MedsIcon from "@material-ui/icons/LocalPharmacy";
import PrepsIcon from "@material-ui/icons/Description";

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
import {
  MedicamentoList,
  MedicamentoEdit,
  MedicamentoCreate,
  MedicamentoShow,
} from "./containers/medicamentos";

import {
  PrescripcioneList,
  PrescripcioneEdit,
  PrescripcioneCreate,
} from "./containers/prescripciones";

import {
  PacienteList,
  PacienteShow,
  PacienteEdit,
  PacienteCreate,
} from "./containers/pacientes";

// const i18nProvider = polyglotI18nProvider(locales => messages[locales]);
const messages = {
  es: {
    ...spanishMessages,
    myMessages,
  },
};
const i18nProvider = polyglotI18nProvider(() => spanishMessages, "es-ES");
const dataProvider = simpleRestProvider("http://localhost:3001");

const App = () => (
  <Admin
    locales="es-ES"
    messages={messages}
    theme={theme}
    dashboard={Dashboard}
    layout={Layout}
    login={LoginPage}
    dataProvider={dataProvider}
    // authProvider={authProvider}
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
      edit={PacienteEdit}
      show={PacienteShow}
      create={PacienteCreate}
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
    <Resource
      name="medicamentos"
      list={MedicamentoList}
      edit={MedicamentoEdit}
      create={MedicamentoCreate}
      show={MedicamentoShow}
      icon={MedsIcon}
    />
    <Resource
      name="prescripciones"
      list={PrescripcioneList}
      edit={PrescripcioneEdit}
      create={PrescripcioneCreate}
      icon={PrepsIcon}
    />
  </Admin>
);

export default App;
