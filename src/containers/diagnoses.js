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
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  ReferenceArrayField,
  ReferenceManyField,
  SelectInput,
  Create,
  Filter,
} from "react-admin";

const DiagnosisFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
    <ReferenceInput
      label="Patient"
      source="patient.id"
      reference="patients"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const DiagnosisList = (props) => (
  <List filters={<DiagnosisFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="created_at" />
      <DateField source="updated_at" />

      <ArrayField source="patients">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

const DiagnosisTitle = ({ record }) => {
  return <span>Diagnosis {record ? `"${record.name}"` : ""}</span>;
};

export const DiagnosisEdit = (props) => (
  <Edit title={<DiagnosisTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput label="Patient" source="patient.id" reference="patients">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput disabled source="created_at" locales="es-ES" />
      <DateInput disabled source="updated_at" locales="es-ES" />
    </SimpleForm>
  </Edit>
);

export const DiagnosisCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput label="Patient" source="patient.id" reference="patients">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
