import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  ArrayField,
  NumberField,
  ChipField,
  SingleFieldList,
  EditButton,
  TextInput,
  Filter,
  Show,
  Tab,
  TabbedShowLayout,
} from "react-admin";

const PacienteFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const PacienteList = (props) => (
  <List filters={<PacienteFilter />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField label="Cedula" source="identidad" />
      <DateField
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        locale="es"
      />
      <TextField source="genero" />
      <BooleanField source="tratado" />
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
      <ArrayField source="citas">
        <SingleFieldList>
          <ChipField source="descripcion" />
        </SingleFieldList>
      </ArrayField>
      <DateField label="Creación" source="created_at" locale="es" />
      <DateField label="Actualización " source="updated_at" locale="es" />
      <EditButton />
    </Datagrid>
  </List>
);
export const PacienteShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Datos personales">
        <BooleanField source="tratado" />
        <TextField source="nombre" />
        <TextField source="apellido" />
        <TextField label="Cedula" source="identidad" />
        <BooleanField source="extranjero" />
        <DateField source="fecha_nacimiento" />
        <TextField source="genero" />
        <DateField label="Creación" source="created_at" locale="es" />
        <DateField label="Actualización " source="updated_at" locale="es" />
      </Tab>
      <Tab label="Direccion" path="direccion">
        <ArrayField source="direccion" fieldKey="id">
          <Datagrid>
            <TextField source="estado" />
            <TextField source="ciudad_pueblo" />
            <TextField source="municpio" />
            <TextField source="parroquia" />
            <TextField source="inmueble" />
            <TextField source="localidad" />
          </Datagrid>
        </ArrayField>
      </Tab>

      <Tab label="Alergias" path="alergias">
        <ArrayField source="alergias" fieldKey="id">
          <Datagrid>
            <TextField source="nombre" />
            <TextField source="reaccion" />
          </Datagrid>
        </ArrayField>
      </Tab>

      <Tab label="Medicamentos" path="medicamentos">
        <ArrayField source="medicamentos">
          <Datagrid>
            <TextField source="id" />
            <TextField source="nombre" />
            <NumberField source="dosis" />
            <NumberField source="toma_por_dia" />
          </Datagrid>
        </ArrayField>
      </Tab>

      <Tab label="Laboratorios" path="laboratorios">
        <ArrayField source="laboratorios">
          <Datagrid>
            <TextField source="id" />
            <TextField source="examen" />
            <DateField source="fecha" />
            <TextField source="proveedor" />
            <TextField source="valor" />
            <BooleanField source="anormal" />
          </Datagrid>
        </ArrayField>
      </Tab>

      <Tab label="Vacunaciones" path="vacunaciones">
        <TextField source="vacunaciones" />
      </Tab>

      <Tab label="Historia" path="historia">
        <ArrayField source="historia">
          <Datagrid>
            <TextField source="id" />
            <TextField source="enfermedad_condicion" />
            <BooleanField source="actual" />
            <TextField source="comentarios" />
          </Datagrid>
        </ArrayField>
      </Tab>

      <Tab label="Femenino" path="femenino">
        <NumberField source="femenino.id" />
      </Tab>

      <Tab label="Social">
        <NumberField source="social.id" />
      </Tab>
      <Tab label="Diagnosticos">
        <ArrayField source="diagnosticos">
          <Datagrid>
            <TextField source="id" />
            <TextField source="nombre" />
            <TextField source="descripcion" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
          </Datagrid>
        </ArrayField>
      </Tab>

      <Tab label="Tratamientos">
        <ArrayField source="tratamientos">
          <Datagrid>
            <TextField source="id" />
            <TextField source="nombre" />
            <TextField source="descripcion" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
          </Datagrid>
        </ArrayField>
      </Tab>
      <TextField source="citas" />
    </TabbedShowLayout>
  </Show>
);
