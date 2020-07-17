import React from "react";

import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  Create,
  Filter,
  Show,
  SimpleShowLayout,
} from "react-admin";

import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (medicamenntos) => {
  const medicamenntosForExport = medicamenntos.map((medicamennto) => {
    const { ...medicamenntoForExport } = medicamennto; // omit backlinks and author
    return medicamenntoForExport;
  });
  jsonExport(
    medicamenntosForExport,
    {
      headers: [
        "id",
        "nombre",
        "descripcion",
        "dosis",
        "unidad_medida",
        "toma",
        "unidad_frecuencia",
      ], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "medicamenntos"); // download as 'medicamenntos.csv` file
    }
  );
};

const MedicamentoFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const MedicamentoList = (props) => (
  <List filters={<MedicamentoFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="show">
      <TextField source="nombre" />
      <TextField source="descripcion" />
      <NumberField source="dosis" />
      <TextField source="unidad_medida" />
      <NumberField source="toma" />
      <TextField source="unidad_frecuencia" />
      <EditButton />
    </Datagrid>
  </List>
);

export const MedicamentoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="descripcion" />
      <NumberInput source="dosis" />
      <SelectInput
        source="unidad_medida"
        choices={[
          { id: "Miligramos", name: "Miligramos" },
          { id: "Gramos", name: "Gramos" },
          { id: "Pastilla", name: "Pastilla" },
          { id: "Cucharada", name: "Cucharada" },
        ]}
      />
      <NumberInput source="toma" />
      <SelectInput
        source="unidad_frecuencia"
        choices={[
          { id: "Unica", name: "Unica" },
          { id: "Dia", name: "Dia" },
          { id: "Semana", name: "Semana" },
          { id: "Mes", name: "Mes" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
export const MedicamentoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="descripcion" />
      <NumberInput source="dosis" />
      <SelectInput
        source="unidad_medida"
        choices={[
          { id: "Miligramos", name: "Miligramos" },
          { id: "Gramos", name: "Gramos" },
          { id: "Pastilla", name: "Pastilla" },
          { id: "Cucharada", name: "Cucharada" },
        ]}
      />
      <NumberInput source="toma" />
      <SelectInput
        source="unidad_frecuencia"
        choices={[
          { id: "Unica", name: "Unica" },
          { id: "Dia", name: "Dia" },
          { id: "Semana", name: "Semana" },
          { id: "Mes", name: "Mes" },
        ]}
      />
    </SimpleForm>
  </Create>
);

export const MedicamentoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="nombre" />
      <TextField source="descripcion" />
      <NumberField source="dosis" />
      <TextField source="unidad_medida" />
      <NumberField source="toma" />
      <TextField source="unidad_frecuencia" />
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización" source="updated_at" locales="es-ES" />
    </SimpleShowLayout>
  </Show>
);
