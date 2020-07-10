import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  Create,
  Filter,
  Show,
  Tab,
  SimpleShowLayout,
} from "react-admin";

import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (practicantes) => {
  const practicantesForExport = practicantes.map((practicante) => {
    const { ...practicanteForExport } = practicante; // omit backlinks and author
    return practicanteForExport;
  });
  jsonExport(
    practicantesForExport,
    {
      headers: [
        "id",
        "nombre",
        "apellido",
        "identidad",
        "fecha_nacimiento",
        "genero",
        "categoria",
        "telefono",
        "correo",
      ], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "practicantes"); // download as 'medicos.csv` file
    }
  );
};

const PracticantesFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const PracticanteList = (props) => (
  <List filters={<PracticantesFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="show">
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField label="Cedula" source="identidad" />
      <TextField source="genero" />
      <TextField source="categoria" />
      <TextField source="telefono" />
      <EmailField source="correo" />
      <DateField
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        locale="es"
      />
      <DateField label="Creación" source="created_at" locale="es" />
      <DateField label="Actualización " source="updated_at" locale="es" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PracticanteEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput label="Cedula" source="identidad" />
      <SelectInput
        source="genero"
        choices={[
          { id: "Femenino", name: "Femenino" },
          { id: "Masculino", name: "Masculino" },
          { id: "Otro", name: "Otro" },
        ]}
      />
      <TextInput source="categoria" />
      <TextInput source="telefono" />
      <TextInput source="correo" />
      <DateInput
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        locale="es"
      />
    </SimpleForm>
  </Edit>
);

export const PracticanteCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput label="Cedula" source="identidad" />
      <SelectInput
        source="genero"
        choices={[
          { id: "Femenino", name: "Femenino" },
          { id: "Masculino", name: "Masculino" },
          { id: "Otro", name: "Otro" },
        ]}
      />
      <TextInput source="categoria" />
      <TextInput source="telefono" />
      <TextInput source="correo" />
      <DateInput
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        locale="es"
      />
    </SimpleForm>
  </Create>
);

export const PracticanteShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <Tab label="Practicante">
        <TextField source="nombre" />
        <TextField source="apellido" />
        <TextField source="identidad" />
        <TextField source="genero" />
        <TextField source="categoria" />
        <TextField source="telefono" />
        <EmailField source="correo" />
        <DateField
          label="Fecha de nacimiento"
          source="fecha_nacimiento"
          locale="es"
        />
        <DateField label="Creación" source="created_at" locale="es" />
        <DateField label="Actualización " source="updated_at" locale="es" />
      </Tab>
    </SimpleShowLayout>
  </Show>
);
