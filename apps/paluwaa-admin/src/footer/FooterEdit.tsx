import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FooterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="quotes" multiline source="quotes" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
