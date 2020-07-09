import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  NumberField,
  EmailField,
  RichTextField,
  ArrayField,
  ReferenceField,
  ReferenceArrayField,
  ReferenceManyField,
  SelectArrayInput,
  ChipField,
  SingleFieldList,
  Edit,
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
  DateTimeInput,
  ReferenceArrayInput,
  BooleanInput,
  SelectInput,
  Create,
  Filter,
  Show,
  ShowButton,
  SimpleShowLayout,
  Tab,
  TabbedShowLayout,
  FormTab,
  TabbedForm,
} from "react-admin";

export const CitaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <BooleanField source="realizada" />
      <DateField source="fecha" showTime="true" locale="es" />
      <TextField source="categoria" />
      <TextField source="descripcion" />
      <TextField source="ubicacion" />
      <DateField label="Creación" source="created_at" locale="es" />
      <DateField label="Actualización " source="updated_at" locale="es" />
      <ShowButton />
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
          source="medicos.id"
          reference="medicos"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          label="Pacientes"
          source="pacientes.id"
          reference="pacientes"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          label="Practicantes"
          source="practicantes.id"
          reference="practicantes"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);
export const CitaCreate = (props) => (
  <Create {...props}>
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
          source="medicos.id"
          reference="medicos"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          label="Pacientes"
          source="pacientes.id"
          reference="pacientes"
        >
          <SelectArrayInput optionText="nombre" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          label="Practicantes"
          source="practicantes.id"
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
        <ReferenceManyField reference="medicos" target="id" addLabel={false}>
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
        </ReferenceManyField>
      </Tab>

      <Tab label="Pacientes" path="pacientes">
        <ReferenceManyField reference="pacientes" target="id" addLabel={false}>
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
        </ReferenceManyField>
      </Tab>

      <Tab label="Practicantes" path="practicantes">
        <ReferenceManyField
          reference="practicantes"
          target="id"
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
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
