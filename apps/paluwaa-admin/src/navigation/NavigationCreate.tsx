import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NavigationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="icon" source="icon" />
        <TextInput label="name" source="name" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
