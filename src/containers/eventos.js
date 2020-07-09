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
  DateInput,
  Create,
  Filter,
  Show,
  SimpleShowLayout,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

export const EventoList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <DateField source="fecha" local="es" />
      <TextField source="nombre" />
      <RichTextField source="categoria" />
      <DateField label="Creación" source="created_at" local="es" />
      <DateField label="Actualización " source="updated_at" local="es" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DateInput source="fecha" local="es" />
      <TextInput source="nombre" />
      <TextInput source="categoria" />
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
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Create>
);

export const EventoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source="fecha" />
      <TextField source="nombre" />
      <TextField source="categoria" />
      <TextField source="descripcion" />
      <DateField label="Creación" source="created_at" local="es" />
      <DateField label="Actualización " source="updated_at" local="es" />
    </SimpleShowLayout>
  </Show>
);
