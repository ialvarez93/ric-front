import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
  Create,
  Filter,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleShowLayout,
  ShowButton,
} from "react-admin";

export const EventoList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <DateField source="fecha" local="es" />
      <TextField source="nombre" />
      <TextField source="categoria" />
      <DateField label="Creación" source="created_at" local="es" />
      <DateField label="Actualización " source="updated_at" local="es" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="descripcion" />
      <DateInput source="fecha" />
      <TextInput source="categoria" />
    </SimpleForm>
  </Edit>
);

export const EventoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="descripcion" />
      <DateInput source="fecha" />
      <TextInput source="categoria" />
    </SimpleForm>
  </Create>
);

export const EventoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="fecha" />
      <TextField source="categoria" />
      <TextField source="nombre" />
      <TextField source="descripcion" />
      <DateField label="Creación" source="created_at" local="es" />
      <DateField label="Actualización " source="updated_at" local="es" />
    </SimpleShowLayout>
  </Show>
);
