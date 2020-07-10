import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  RichTextField,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
  Create,
  Filter,
  Show,
  SimpleShowLayout,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

const EventFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
    <ReferenceInput
      label="Categoria"
      source="id"
      reference="eventos"
      allowEmpty
    >
      <SelectInput optionText="categoria" />
    </ReferenceInput>

    <ReferenceInput label="fecha" source="id" reference="eventos" allowEmpty>
      <DateInput source="fecha" locales="es-ES" />
    </ReferenceInput>
  </Filter>
);

export const EventoList = (props) => (
  <List filters={<EventFilter />} {...props}>
    <Datagrid rowClick="show">
      <DateField source="fecha" showTime="true" locale="es" />
      <TextField source="nombre" />
      <RichTextField source="categoria" />
      <DateField label="Creación" source="created_at" locale="es" />
      <DateField label="Actualización " source="updated_at" locale="es" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DateTimeInput source="fecha" locale="es" />
      <TextInput source="nombre" />
      <SelectInput
        source="categoria"
        choices={[
          { id: "Jornada", name: "Jornada" },
          { id: "Falla", name: "Falla" },
          { id: "Incidente", name: "Incidente" },
          { id: "Docente", name: "Docente" },
          { id: "Mantenimiento", name: "Mantenimiento" },
        ]}
      />
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Edit>
);

export const EventoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="fecha" />
      <TextInput source="nombre" />
      <TextInput source="categoria" />
      <SelectInput
        source="categoria"
        choices={[
          { id: "Jornada", name: "Jornada" },
          { id: "Falla", name: "Falla" },
          { id: "Incidente", name: "Incidente" },
          { id: "Docente", name: "Docente" },
          { id: "Mantenimiento", name: "Mantenimiento" },
        ]}
      />
      <RichTextInput source="descripcion" />
    </SimpleForm>
  </Create>
);

export const EventoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source="fecha" />
      <TextField source="nombre" />
      <TextField source="categoria" />
      <TextField source="descripcion" />
      <DateField label="Creación" source="created_at" locale="es" />
      <DateField label="Actualización " source="updated_at" locale="es" />
    </SimpleShowLayout>
  </Show>
);
