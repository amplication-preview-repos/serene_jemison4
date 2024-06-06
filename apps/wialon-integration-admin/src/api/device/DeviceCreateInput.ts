import { MessageCreateNestedManyWithoutDevicesInput } from "./MessageCreateNestedManyWithoutDevicesInput";
import { SessionCreateNestedManyWithoutDevicesInput } from "./SessionCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  imei?: string | null;
  lastLocation?: string | null;
  messages?: MessageCreateNestedManyWithoutDevicesInput;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutDevicesInput;
  status?: "Option1" | null;
};
