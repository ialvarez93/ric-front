import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  RichTextField,
  ArrayField,
  ReferenceField,
  ReferenceManyField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  Create,
  Filter,
  Show,
  SimpleShowLayout,
  Tab,
  TabbedShowLayout,
} from "react-admin";

export const MedicoList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField source="identidad" />
      <TextField source="genero" />
      <TextField source="categoria" />
      <DateField
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        local="es"
      />
      <TextField source="telefono" />
      <EmailField source="correo" />
      <DateField label="Creación" source="created_at" local="es" />
      <DateField label="Actualización " source="updated_at" local="es" />
      <EditButton />
    </Datagrid>
  </List>
);

export const MedicoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput lacel="Cedula" source="identidad" />
      <SelectInput
        source="genero"
        choices={[
          { id: "Femenino", name: "Femenino" },
          { id: "Masculino", name: "Masculino" },
          { id: "Otro", name: "Otro" },
        ]}
      />
      <TextInput source="categoria" />
      <TextInput source="telefono" />
      <TextInput source="correo" />
      <DateInput
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        local="es"
      />
    </SimpleForm>
  </Edit>
);

export const MedicoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput lacel="Cedula" source="identidad" />
      <SelectInput
        source="genero"
        choices={[
          { id: "Femenino", name: "Femenino" },
          { id: "Masculino", name: "Masculino" },
          { id: "Otro", name: "Otro" },
        ]}
      />
      <TextInput source="categoria" />
      <TextInput source="telefono" />
      <TextInput source="correo" />
      <DateInput
        label="Fecha de nacimiento"
        source="fecha_nacimiento"
        local="es-ES"
      />
    </SimpleForm>
  </Create>
);

export const MedicoShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Medico">
        <TextField source="nombre" />
        <TextField source="apellido" />
        <TextField source="identidad" />
        <TextField source="genero" />
        <TextField source="categoria" />
        <TextField source="telefono" />
        <EmailField source="correo" />
        <DateField
          label="Fecha de nacimiento"
          source="fecha_nacimiento"
          local="es"
        />
        <DateField label="Creación" source="created_at" local="es" />
        <DateField label="Actualización " source="updated_at" local="es" />
      </Tab>
      <Tab label="Citas" path="citas">
        <ReferenceManyField reference="citas" target="id" addLabel={false}>
          <Datagrid>
            <DateField source="fecha" local="es" />
            <TextField source="categoria" />
            <TextField source="descripcion" />
            <TextField source="ubicacion" />
            <DateField label="Creación" source="created_at" local="es" />
            <DateField label="Actualización " source="updated_at" local="es" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
