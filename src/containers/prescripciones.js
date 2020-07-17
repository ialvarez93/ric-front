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
  SelectInput,
  ReferenceInput,
  Create,
  Filter,
  ReferenceArrayInput,
  ReferenceField,
  ArrayField,
  SingleFieldList,
  ChipField,
  SelectArrayInput,
} from "react-admin";

import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (prescripciones) => {
  const prescripcionesForExport = prescripciones.map((prescripcione) => {
    const { ...prescripcioneForExport } = prescripcione; // omit backlinks and author
    return prescripcioneForExport;
  });
  jsonExport(
    prescripcionesForExport,
    {
      headers: [
        "id",
        "nombre",
        "descripcion",
        "medico",
        "paciente",
        "medicamentos",
      ], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "prescripciones"); // download as 'prescripciones.csv` file
    }
  );
};

const PrescripcioneFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
    {/* <TextInput label="Medicos" source="medicos" /> */}
  </Filter>
);

const PrescripcionePanel = ({ record }) => (
  <div dangerouslySetInnerHTML={{ __html: record.descripcion }} />
);

export const PrescripcioneList = (props) => (
  <List filters={<PrescripcioneFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="expand" expand={<PrescripcionePanel />}>
      <ReferenceField label="Medico" source="medico.id" reference="medicos">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField
        label="Paciente"
        source="paciente.id"
        reference="pacientes"
      >
        <TextField source="nombre" />
      </ReferenceField>
      <ArrayField source="medicamentos">
        <SingleFieldList>
          <ChipField source="nombre" />
        </SingleFieldList>
      </ArrayField>
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización" source="updated_at" locales="es-ES" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PrescripcioneEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput label="Médico" source="medico.id" reference="medicos">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput
        label="Paciente"
        source="paciente.id"
        reference="pacientes"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput source="descripcion" />
      <ReferenceArrayInput
        label="Medicamentos"
        source="medicamentos"
        reference="medicamentos"
      >
        <SelectArrayInput optionText="nombre" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);
export const PrescripcioneCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Médico" source="medico.id" reference="medicos">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput
        label="Paciente"
        source="paciente.id"
        reference="pacientes"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput source="descripcion" />
      <ReferenceArrayInput
        label="Medicamentos"
        source="medicamentos"
        reference="medicamentos"
      >
        <SelectArrayInput optionText="nombre" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
