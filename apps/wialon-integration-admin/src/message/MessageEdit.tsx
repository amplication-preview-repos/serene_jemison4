import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DeviceTitle } from "../device/DeviceTitle";
import { LocationTitle } from "../location/LocationTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="data" multiline source="data" />
        <ReferenceInput source="device.id" reference="Device" label="device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
