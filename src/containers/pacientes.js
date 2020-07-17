import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  ArrayField,
  NumberField,
  RichTextField,
  ChipField,
  SingleFieldList,
  ReferenceArrayField,
  TabbedShowLayout,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  Tab,
  Edit,
  BooleanInput,
  DateInput,
  NumberInput,
  EditButton,
  TextInput,
  FormTab,
  TabbedForm,
  Filter,
  Show,
  Create,
} from "react-admin";

import { downloadCSV } from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (pacientes) => {
  const pacientesForExport = pacientes.map((paciente) => {
    const { ...pacienteForExport } = paciente; // omit backlinks and author
    return pacienteForExport;
  });
  jsonExport(
    pacientesForExport,
    {
      headers: [
        "id",
        "nombre",
        "apellido",
        "identidad",
        "extranjero",
        "fecha_nacimiento",
        "genero",
        "tratado",
        "exitus",
        "estado",
        "ciudad_pueblo",
        "municipio",
        "parroquia",
        "inmueble",
        "localidad",
        "ocupacion",
        "empleador",
        "turno_nocturno",
        "estdo_civil",
        "hijos",
        "tabaco",
        "consumo_tabaco",
        "alcohol",
        "consumo_alcohol",
        "drogas",
        "consumo_drogas",
        "genero_pareja",
        "numero_pareja",
        "horas_ejercicio_semanal",
        "horas_sueno_diario",
        // "diagnosticos",
        // "tratamientos",
      ], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "pacientes"); // download as 'pacientes.csv` file
    }
  );
};

const PacienteFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const PacienteList = (props) => (
  <List filters={<PacienteFilter />} {...props} exporter={exporter}>
    <Datagrid rowClick="show">
      <BooleanField source="tratado" />
      <BooleanField source="exitus" />
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField label="Cedula" source="identidad" />
      <DateField
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        locales="es-ES"
      />
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
      <DateField label="Creación" source="created_at" locales="es-ES" />
      <DateField label="Actualización " source="updated_at" locales="es-ES" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PacienteEdit = (props) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="Datos personales">
        <BooleanInput source="tratado" />
        <BooleanInput source="exitus" />
        <TextInput source="nombre" />
        <TextInput source="apellido" />
        <TextInput label="Cedula" source="identidad" />
        <BooleanInput source="extranjero" />
        <DateInput source="fecha_nacimiento" />
        <SelectInput
          source="genero"
          choices={[
            { id: "Femenino", name: "Femenino" },
            { id: "Masculino", name: "Masculino" },
            { id: "Otro", name: "Otro" },
          ]}
        />
      </FormTab>

      <FormTab label="Direccion" path="direccion">
        <TextInput source="estado" />
        <TextInput source="ciudad_pueblo" />
        <TextInput source="municipio" />
        <TextInput source="parroquia" />
        <TextInput source="inmueble" />
        <TextInput source="localidad" />
      </FormTab>
      <FormTab label="Social" path="social">
        <TextInput source="ocupacion" />
        <TextInput source="empleador" />
        <BooleanInput source="turno_nocturno" />
        <SelectInput
          source="estdo_civil"
          choices={[
            { id: "Soltero", name: "Soltero" },
            { id: "Casado", name: "Casado" },
            { id: "Divorciado", name: "Divorciado" },
            { id: "Viudo", name: "Viudo" },
          ]}
        />
        <NumberInput source="hijos" />
        <BooleanInput source="tabaco" />
        <DateInput source="consumo_tabaco" locales="es-ES" />
        <BooleanInput source="alcohol" />
        <DateInput source="consumo_alcohol" locales="es-ES" />
        <BooleanInput source="drogas" />
        <DateInput source="consumo_drogas" locales="es-ES" />
        <SelectInput
          source="genero_pareja"
          choices={[
            { id: "Femenino", name: "Femenino" },
            { id: "Masculino", name: "Masculino" },
            { id: "Ambos", name: "Ambos" },
          ]}
        />
        <NumberInput source="numero_pareja" />
        <NumberInput
          label="Horas de ejercicio semanal"
          source="horas_ejercicio_semanal"
        />
        <NumberInput
          label="Horas de sueño diario"
          source="horas_sueno_diario"
        />
      </FormTab>
      <FormTab label="Diagnosticos" path="diagnosticos">
        <ReferenceArrayInput
          label="Diagnosticos"
          source="diagnosticos"
          reference="diagnosticos"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
      </FormTab>
      <FormTab label="Tratamientos" path="tratamientos">
        <ReferenceArrayInput
          label="Tratamientos"
          source="tratamientos"
          reference="tratamientos"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);
export const PacienteCreate = (props) => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="Datos personales">
        <BooleanInput source="tratado" />
        <BooleanInput source="exitus" />
        <TextInput source="nombre" />
        <TextInput source="apellido" />
        <TextInput label="Cedula" source="identidad" />
        <BooleanInput source="extranjero" />
        <DateInput source="fecha_nacimiento" />
        <SelectInput
          source="genero"
          choices={[
            { id: "Femenino", name: "Femenino" },
            { id: "Masculino", name: "Masculino" },
            { id: "Otro", name: "Otro" },
          ]}
        />
      </FormTab>

      <FormTab label="Direccion" path="direccion">
        <TextInput source="estado" />
        <TextInput source="ciudad_pueblo" />
        <TextInput source="municipio" />
        <TextInput source="parroquia" />
        <TextInput source="inmueble" />
        <TextInput source="localidad" />
      </FormTab>
      <FormTab label="Social" path="social">
        <TextInput source="ocupacion" />
        <TextInput source="empleador" />
        <BooleanInput source="turno_nocturno" />
        <SelectInput
          source="estdo_civil"
          choices={[
            { id: "Soltero", name: "Soltero" },
            { id: "Casado", name: "Casado" },
            { id: "Divorciado", name: "Divorciado" },
            { id: "Viudo", name: "Viudo" },
          ]}
        />
        <NumberInput source="hijos" />
        <BooleanInput source="tabaco" />
        <DateInput source="consumo_tabaco" locales="es-ES" />
        <BooleanInput source="alcohol" />
        <DateInput source="consumo_alcohol" locales="es-ES" />
        <BooleanInput source="drogas" />
        <DateInput source="consumo_drogas" locales="es-ES" />
        <SelectInput
          source="genero_pareja"
          choices={[
            { id: "Femenino", name: "Femenino" },
            { id: "Masculino", name: "Masculino" },
            { id: "Ambos", name: "Ambos" },
          ]}
        />
        <NumberInput source="numero_pareja" />
        <NumberInput
          label="Horas de ejercicio semanal"
          source="horas_ejercicio_semanal"
        />
        <NumberInput
          label="Horas de sueño diario"
          source="horas_sueno_diario"
        />
      </FormTab>
      <FormTab label="Diagnosticos" path="diagnosticos">
        <ReferenceArrayInput
          label="Diagnosticos"
          source="diagnosticos"
          reference="diagnosticos"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
      </FormTab>
      <FormTab label="Tratamientos" path="tratamientos">
        <ReferenceArrayInput
          label="Tratamientos"
          source="tratamientos"
          reference="tratamientos"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
      </FormTab>
    </TabbedForm>
  </Create>
);

export const PacienteShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Datos personales">
        <BooleanField source="tratado" />
        <BooleanField source="exitus" />
        <TextField source="nombre" />
        <TextField source="apellido" />
        <TextField label="Cedula" source="identidad" />
        <BooleanField source="extranjero" />
        <DateField source="fecha_nacimiento" locales="es-ES" />
        <TextField source="genero" />
        <DateField label="Creación" source="created_at" locales="es-ES" />
        <DateField label="Actualización " source="updated_at" locales="es-ES" />
      </Tab>
      <Tab label="Dirección" path="direccion">
        <TextField source="estado" />
        <TextField source="ciudad_pueblo" />
        <TextField source="municipio" />
        <TextField source="parroquia" />
        <TextField source="inmueble" />
        <TextField source="localidad" />
      </Tab>
      <Tab label="Social" path="social">
        <TextField source="ocupacion" />
        <TextField source="empleador" />
        <BooleanField source="turno_nocturno" />
        <TextField source="estdo_civil" />
        <NumberField source="hijos" />
        <BooleanField source="tabaco" />
        <TextField source="consumo_tabaco" />
        <BooleanField source="alcohol" />
        <TextField source="consumo_alcohol" />
        <BooleanField source="drogas" />
        <TextField source="consumo_drogas" />
        <TextField source="genero_pareja" />
        <NumberField source="numero_pareja" />
        <NumberField source="horas_ejercicio_semanal" />
        <NumberField source="horas_sueno_diario" />
      </Tab>
      <Tab label="Diagnosticos" path="diagnosticos">
        <ReferenceArrayField
          addLabel={false}
          reference="diagnosticos"
          source="diagnosticos"
        >
          <Datagrid>
            <TextField source="nombre" />
            <RichTextField source="descripcion" />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>
      </Tab>
      <Tab label="Tratamientos" path="tratamientos">
        <ReferenceArrayField
          addLabel={false}
          reference="tratamientos"
          source="tratamientos"
        >
          <Datagrid>
            <TextField source="nombre" />
            <RichTextField source="descripcion" />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
