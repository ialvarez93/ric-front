import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
  Create,
  Filter,
  Show,
  SimpleShowLayout,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (eventos) => {
  const eventosForExport = eventos.map((evento) => {
    const { backlinks, author, ...eventoForExport } = evento; // omit backlinks and author
    return eventoForExport;
  });
  jsonExport(
    eventosForExport,
    {
      headers: ["id", "nombre", "descripcion", "fecha", "categoria"], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "eventos"); // download as 'eventos.csv` file
    }
  );
};

const EventFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
    <ReferenceInput
      label="Categoria"
      source="id"
      reference="eventos"
      allowEmpty
    >
      <SelectInput optionText="categoria" />
    </ReferenceInput>

    <ReferenceInput label="Fecha" source="id" reference="eventos" allowEmpty>
      <DateInput source="fecha" locales="es-ES" />
    </ReferenceInput>
  </Filter>
);

const EventoPanel = ({ record }) => (
  <div dangerouslySetInnerHTML={{ __html: record.descripcion }} />
);

export const EventoList = (props) => (
  <List filters={<EventFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="expand" expand={<EventoPanel />}>
      <DateField source="fecha" showTime="true" locales="es-ES" />
      <TextField source="nombre" />
      <TextField source="categoria" />
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización " source="updated_at" locales="es-ES" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DateTimeInput source="fecha" locales="es-ES" />
      <TextInput source="nombre" />
      <SelectInput
        source="categoria"
        choices={[
          { id: "Jornada", name: "Jornada" },
          { id: "Falla", name: "Falla" },
          { id: "Incidente", name: "Incidente" },
          { id: "Docente", name: "Docente" },
          { id: "Mantenimiento", name: "Mantenimiento" },
        ]}
      />
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Edit>
);

export const EventoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="fecha" />
      <TextInput source="nombre" />
      <TextInput source="categoria" />
      <SelectInput
        source="categoria"
        choices={[
          { id: "Jornada", name: "Jornada" },
          { id: "Falla", name: "Falla" },
          { id: "Incidente", name: "Incidente" },
          { id: "Docente", name: "Docente" },
          { id: "Mantenimiento", name: "Mantenimiento" },
        ]}
      />
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Create>
);

export const EventoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source="fecha" locales="es-ES" />
      <TextField source="nombre" />
      <TextField source="categoria" />
      <TextField source="descripcion" />
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización " source="updated_at" locales="es-ES" />
    </SimpleShowLayout>
  </Show>
);
