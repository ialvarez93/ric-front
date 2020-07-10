import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  RichTextField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  Create,
  Filter,
  Show,
  SimpleShowLayout,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (diagnosticos) => {
  const diagnosticosForExport = diagnosticos.map((diagnostico) => {
    const { ...diagnosticoForExport } = diagnostico; // omit backlinks and author
    return diagnosticoForExport;
  });
  jsonExport(
    diagnosticosForExport,
    {
      headers: ["id", "nombre", "descripcion"], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "diagnosticos"); // download as 'medicos.csv` file
    }
  );
};

const DiagnosticoFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const DiagnosticoList = (props) => (
  <List filters={<DiagnosticoFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="show">
      <TextField source="nombre" />
      <RichTextField source="descripcion" />
      <DateField label="Creación" source="created_at" locale="es" />
      <DateField label="Actualización " source="updated_at" locale="es" />
      <EditButton />
    </Datagrid>
  </List>
);

export const DiagnosticoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Edit>
);
export const DiagnosticoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Create>
);

export const DiagnosticoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="nombre" />
      <TextField source="descripcion" />
      <DateField label="Creación" source="created_at" locale="es" />
      <DateField label="Actualización " source="updated_at" locale="es" />
    </SimpleShowLayout>
  </Show>
);
