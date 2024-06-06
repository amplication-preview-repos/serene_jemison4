import { MessageUpdateManyWithoutDevicesInput } from "./MessageUpdateManyWithoutDevicesInput";
import { SessionUpdateManyWithoutDevicesInput } from "./SessionUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  imei?: string | null;
  lastLocation?: string | null;
  messages?: MessageUpdateManyWithoutDevicesInput;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutDevicesInput;
  status?: "Option1" | null;
};
