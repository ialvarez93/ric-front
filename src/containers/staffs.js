import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  ArrayField,
  SingleFieldList,
  ChipField,
  NumberField,
} from "react-admin";

export const StaffList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="job" />
      <ArrayField source="appointments">
        <Datagrid>
          <DateField label="Fecha" source="date" locales="es-ES" />
          <TextField label="Descripción" source="description" />
          <ChipField label="Categoria" source="category" />
        </Datagrid>
      </ArrayField>
      <TextField source="name" />
      <TextField source="last_name" />
      <TextField source="ci" />
      <DateField source="dob" locales="es-ES" />
      <TextField source="gender" />
      <TextField source="phone_number" />
      <EmailField source="email" />
      <DateField source="created_at" />
      <DateField source="updated_at" locales="es-ES" />
    </Datagrid>
  </List>
);
