import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NavigationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="icon" source="icon" />
        <TextInput label="name" source="name" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
