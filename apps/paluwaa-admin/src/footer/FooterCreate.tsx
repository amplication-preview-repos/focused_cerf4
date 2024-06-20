import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FooterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="quotes" multiline source="quotes" />
        <div />
      </SimpleForm>
    </Create>
  );
};
