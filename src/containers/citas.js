import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  EmailField,
  ArrayField,
  ReferenceArrayField,
  SelectArrayInput,
  ChipField,
  SingleFieldList,
  Edit,
  EditButton,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  BooleanInput,
  SelectInput,
  Create,
  Filter,
  Show,
  ShowButton,
  Tab,
  TabbedShowLayout,
  FormTab,
  TabbedForm,
} from "react-admin";

import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (citas) => {
  const citasForExport = citas.map((cita) => {
    const { ...citaForExport } = cita; // omit backlinks and author
    return citaForExport;
  });
  jsonExport(
    citasForExport,
    {
      headers: [
        "id",
        "descripcion",
        "fecha",
        "categoria",
        "realizada",
        "medicos",
        "practicantes",
        "pacientes",
      ], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "citas"); // download as 'citas.csv` file
    }
  );
};

const CitaFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const CitaList = (props) => (
  <List filters={<CitaFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="show">
      <BooleanField source="realizada" />
      <DateField source="fecha" showTime="true" locale="es" />
      <TextField source="categoria" />
      <TextField source="descripcion" />
      <TextField source="ubicacion" />
      <DateField label="Creación" source="created_at" locale="es" />
      <DateField label="Actualización " source="updated_at" locale="es" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CitaEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="Cita">
        <BooleanInput source="realizada" />
        <DateTimeInput source="fecha" locale="es" />
        <SelectInput
          source="categoria"
          choices={[
            { id: "Consulta", name: "Consulta" },
            { id: "Cirugia", name: "Cirugia" },
            { id: "Tratamiento", name: "Tratamiento" },
            { id: "Soporte", name: "Soporte" },
          ]}
        />
        <TextInput source="descripcion" />
        <TextInput source="ubicacion" />
      </FormTab>
      <FormTab label="Involucrados">
        <ReferenceArrayInput
          label="Médicos"
          source="medicos"
          reference="medicos"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
        <ReferenceArrayField
          reference="medicos"
          source="medicos"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField label="Cedula" source="identidad" />
            <TextField source="genero" />
            <TextField source="categoria" />
            <TextField source="telefono" />
            <EmailField source="correo" />
            <DateField source="fecha_nacimiento" locale="es" />
            <DateField label="Creación" source="created_at" locale="es" />
            <DateField label="Actualización " source="updated_at" locale="es" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>

        <ReferenceArrayInput
          label="Pacientes"
          source="pacientes"
          reference="pacientes"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
        <ReferenceArrayField
          reference="pacientes"
          source="pacientes"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField label="Cedula" source="identidad" />
            <TextField source="genero" />
            <ArrayField source="diagnosticos">
              <SingleFieldList>
                <ChipField source="nombre" />
              </SingleFieldList>
            </ArrayField>
            <ArrayField source="tratamientos">
              <SingleFieldList>
                <ChipField source="nombre" />
              </SingleFieldList>
            </ArrayField>
            <DateField source="fecha_nacimiento" locale="es" />
            <DateField label="Creación" source="created_at" locale="es" />
            <DateField label="Actualización " source="updated_at" locale="es" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>

        <ReferenceArrayInput
          label="Practicantes"
          source="practicantes"
          reference="practicantes"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>

        <ReferenceArrayField
          reference="practicantes"
          source="practicantes"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField label="Cedula" source="identidad" />
            <TextField source="genero" />
            <TextField source="categoria" />
            <TextField source="telefono" />
            <EmailField source="correo" />
            <DateField source="fecha_nacimiento" locale="es" />
            <DateField label="Creación" source="created_at" locale="es" />
            <DateField label="Actualización " source="updated_at" locale="es" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>
      </FormTab>
    </TabbedForm>
  </Edit>
);
export const CitaCreate = (props) => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="Cita">
        <BooleanInput source="realizada" />
        <DateTimeInput source="fecha" locale="es-ES" />
        <SelectInput
          source="categoria"
          choices={[
            { id: "Consulta", name: "Consulta" },
            { id: "Cirugia", name: "Cirugia" },
            { id: "Tratamiento", name: "Tratamiento" },
            { id: "Soporte", name: "Soporte" },
          ]}
        />
        <TextInput source="descripcion" />
        <TextInput source="ubicacion" />
      </FormTab>
      <FormTab label="Involucrados">
        <ReferenceArrayInput
          label="Médicos"
          source="medicos"
          reference="medicos"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          label="Pacientes"
          source="pacientes"
          reference="pacientes"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          label="Practicantes"
          source="practicantes"
          reference="practicantes"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
      </FormTab>
    </TabbedForm>
  </Create>
);

export const CitaShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Cita">
        <BooleanField source="realizada" />
        <DateField source="fecha" />
        <TextField source="categoria" />
        <TextField source="descripcion" />
        <TextField source="ubicacion" />
        <DateField label="Creación" source="created_at" locale="es" />
        <DateField label="Actualización " source="updated_at" locale="es" />
      </Tab>
      <Tab label="Medicos" path="medicos">
        <ReferenceArrayField
          reference="medicos"
          source="medicos"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField label="Cedula" source="identidad" />
            <TextField source="genero" />
            <TextField source="categoria" />
            <TextField source="telefono" />
            <EmailField source="correo" />
            <DateField source="fecha_nacimiento" locale="es" />
            <DateField label="Creación" source="created_at" locale="es" />
            <DateField label="Actualización " source="updated_at" locale="es" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>
      </Tab>

      <Tab label="Pacientes" path="pacientes">
        <ReferenceArrayField
          reference="pacientes"
          source="pacientes"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField label="Cedula" source="identidad" />
            <TextField source="genero" />
            <ArrayField source="diagnosticos">
              <SingleFieldList>
                <ChipField source="nombre" />
              </SingleFieldList>
            </ArrayField>
            <ArrayField source="tratamientos">
              <SingleFieldList>
                <ChipField source="nombre" />
              </SingleFieldList>
            </ArrayField>
            <DateField source="fecha_nacimiento" locale="es" />
            <DateField label="Creación" source="created_at" locale="es" />
            <DateField label="Actualización " source="updated_at" locale="es" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>
      </Tab>

      <Tab label="Practicantes" path="practicantes">
        <ReferenceArrayField
          reference="practicantes"
          source="practicantes"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField label="Cedula" source="identidad" />
            <TextField source="genero" />
            <TextField source="categoria" />
            <TextField source="telefono" />
            <EmailField source="correo" />
            <DateField source="fecha_nacimiento" locale="es" />
            <DateField label="Creación" source="created_at" locale="es" />
            <DateField label="Actualización " source="updated_at" locale="es" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
