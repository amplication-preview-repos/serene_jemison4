import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DeviceTitle } from "../device/DeviceTitle";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="device.id" reference="Device" label="device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <DateTimeInput label="endedAt" source="endedAt" />
        <DateTimeInput label="startedAt" source="startedAt" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
