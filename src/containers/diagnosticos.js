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

export const DiagnosticoList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="nombre" />
      <RichTextField source="descripcion" />
      <DateField label="Creación" source="created_at" local="es" />
      <DateField label="Actualización " source="updated_at" local="es" />
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
      <DateField label="Creación" source="created_at" local="es" />
      <DateField label="Actualización " source="updated_at" local="es" />
    </SimpleShowLayout>
  </Show>
);
