import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
  ReferenceArrayField,
  ShowButton,
  DeleteButton,
} from "react-admin";

export const AppointmentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField label="Fecha" source="date" locla="es-Es" />
      <TextField label="Categoria" source="category" />
      <ReferenceField label="Paciente" source="patient.id" reference="patients">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Médico" source="medic.id" reference="medics">
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Descripción" source="description" />
      <TextField label="Ubicación" source="location" />
      <ArrayField label="Personal" source="staffs">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <DateField label="Creado el" source="created_at" />
      <DateField label="Actualizado el " source="updated_at" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const AppointmentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <DateInput source="date" />
      <TextInput source="description" />
      <TextInput source="category" />
      <NumberInput source="patient.id" />
      <NumberInput source="medic.id" />
      <DateInput source="location" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
      <ArrayInput source="staffs">
        <SimpleFormIterator>
          <TextInput source="id" />
          <TextInput source="job" />
          <TextInput source="name" />
          <TextInput source="last_name" />
          <DateInput source="ci" />
          <DateInput source="dob" />
          <TextInput source="gender" />
          <TextInput source="phone_number" />
          <TextInput source="email" />
          <DateInput source="created_at" />
          <DateInput source="updated_at" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
