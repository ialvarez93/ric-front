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
  SimpleShowLayout,
} from "react-admin";

import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (medicos) => {
  const medicosForExport = medicos.map((medico) => {
    const { ...medicoForExport } = medico; // omit backlinks and author
    return medicoForExport;
  });
  jsonExport(
    medicosForExport,
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
      downloadCSV(csv, "medicos"); // download as 'medicos.csv` file
    }
  );
};

const MedicoFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const MedicoList = (props) => (
  <List filters={<MedicoFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="show">
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField source="identidad" />
      <TextField source="genero" />
      <TextField source="categoria" />
      <DateField
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        locales="es-ES"
      />
      <TextField source="telefono" />
      <EmailField source="correo" />
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización " source="updated_at" locales="es-ES" />
      <EditButton />
    </Datagrid>
  </List>
);

export const MedicoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput lacel="Cedula" source="identidad" />
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
        locales="es-ES"
      />
    </SimpleForm>
  </Edit>
);

export const MedicoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput lacel="Cedula" source="identidad" />
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
        locales="es-ES"
      />
    </SimpleForm>
  </Create>
);

export const MedicoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
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
        locales="es-ES"
      />
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización " source="updated_at" locales="es-ES" />
    </SimpleShowLayout>
  </Show>
);
