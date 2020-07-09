import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField,
  EmailField,
} from "react-admin";

export const MedicList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="last_name" />
      <TextField source="ci" />
      <DateField source="dob" locales="es-ES" />
      <TextField source="gender" />
      <TextField source="job" />
      <TextField source="phone_number" />
      <EmailField source="email" />
      <DateField source="created_at" locales="es-ES" />
      <DateField source="updated_at" locales="es-ES" />
      <ArrayField source="appointments">
        <Datagrid>
          <DateField source="date" locales="es-ES" />
          <TextField source="description" />
          <TextField source="category" />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  </List>
);
