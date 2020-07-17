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

const exporter = (tratamientos) => {
  const tratamientosForExport = tratamientos.map((tratamiento) => {
    const { ...tratamientoForExport } = tratamiento; // omit backlinks and author
    return tratamientoForExport;
  });
  jsonExport(
    tratamientosForExport,
    {
      headers: ["id", "nombre", "descripcion"], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "tratamientos"); // download as 'medicos.csv` file
    }
  );
};

const TratamientoFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

const TratamientoPanel = ({ id, record, resource }) => (
  <div dangerouslySetInnerHTML={{ __html: record.descripcion }} />
);

export const TratamientoList = (props) => (
  <List filters={<TratamientoFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="expand" expand={<TratamientoPanel />}>
      <TextField source="nombre" />
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización " source="updated_at" locales="es-ES" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TratamientoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Edit>
);
export const TratamientoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Create>
);

export const TratamientoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="nombre" />
      <TextField source="descripcion" />
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización " source="updated_at" locales="es-ES" />
    </SimpleShowLayout>
  </Show>
);
