import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  Create,
  Filter,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const EventFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
    <ReferenceInput label="Category" source="id" reference="events" allowEmpty>
      <SelectInput optionText="category" />
    </ReferenceInput>
    <ReferenceInput label="Date" source="id" reference="events" allowEmpty>
      <DateInput source="date" locales="es-ES" />
    </ReferenceInput>
  </Filter>
);

export const EventList = (props) => (
  <List filters={<EventFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <DateField source="date" />
      <TextField source="category" />
      <DateField label="Creado el" source="created_at" />
      <DateField label="Actualizado el" source="updated_at" />
      <BooleanField label="Realizado" source="complete" />
    </Datagrid>
  </List>
);

const EventTitle = ({ record }) => {
  return <span>Event {record ? `"${record.title}"` : ""}</span>;
};

export const EventEdit = (props) => (
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <DateInput source="date" locales="es-ES" />
      <TextInput source="category" />
      <TextInput multiline source="description" />
      <DateInput disabled source="created_at" locales="es-ES" />
      <DateInput disabled source="updated_at" locales="es-ES" />
    </SimpleForm>
  </Edit>
);
export const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <DateInput source="date" locales="es-ES" />
      <TextInput source="category" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
);
