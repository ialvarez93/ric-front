import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayField,
  ReferenceArrayInput,
  SelectArrayInput,
  Create,
} from "react-admin";

export const TreatmentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <ReferenceArrayField
        label="Patients"
        source="patient.id"
        reference="patients"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ArrayField source="patients">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

export const TreatmentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <DateInput disabled source="created_at" locales="es-ES" />
      <DateInput disabled source="updated_at" locales="es-ES" />
      <ReferenceArrayInput
        label="Patients"
        source="patient.id"
        reference="patients"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const TreatmentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceArrayInput
        label="Patients"
        source="patient.id"
        reference="patients"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
