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
  BooleanField,
  Filter,
  ReferenceInput,
  ReferenceArrayField,
  ReferenceManyField,
  SelectInput,
  TextInput,
} from "react-admin";

const PatientFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
    <ReferenceInput label="Patient" source="id" reference="patients" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

// export const PatientList = (props) => (
//   <List filters={<PatientFilter />} {...props}>
//     <Datagrid rowClick="edit">
//       <TextField source="name" />
//       <TextField source="last_name" />
//       <TextField source="ci" />
//       <DateField label="Date of birth" source="dob" locale="es-ES" />
//       <TextField source="gender" />
//       <EmailField source="email" />
//       <TextField source="phone_number" />
//       <TextField source="address.estado" />
//       <TextField source="address.municipio" />
//       <TextField source="address.ciudad" />
//       <TextField source="address.habitacion" />

//       <ArrayField source="appointments">
//         <SingleFieldList>
//           <DateField source="date" locale="es-ES" />
//         </SingleFieldList>
//       </ArrayField>
//       <ArrayField source="diagnoses">
//         <SingleFieldList>
//           <ChipField source="name" />
//         </SingleFieldList>
//       </ArrayField>
//       <ArrayField source="treatments">
//         <SingleFieldList>
//           <ChipField source="name" />
//         </SingleFieldList>
//       </ArrayField>
//     </Datagrid>
//   </List>
// );

export const PatientList = (props) => (
  <List rowClick="edit" {...props}>
    <Datagrid>
      <BooleanField label="Tratado" source="treated" />
      <TextField label="Cédula" source="ci" />
      <TextField label="Nombre" source="name" />
      <TextField label="Apellido" source="last_name" />
      <TextField label="Genero" source="gender" />
      <DateField label="Fecha de Nacimiento" source="dob" locale="es" />
      <TextField label="Telefono" source="phone_number" />
      <EmailField source="email" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <TextField label="Municipio" source="address.municipio" />
      <ArrayField label="Citas" source="appointments">
        <SingleFieldList>
          <ChipField source="description" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField label="Diagnosticos" source="diagnoses">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField label="Tratamiento" source="treatments">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);
