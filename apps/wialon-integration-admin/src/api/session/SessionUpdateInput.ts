import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type SessionUpdateInput = {
  device?: DeviceWhereUniqueInput | null;
  endedAt?: Date | null;
  startedAt?: Date | null;
  status?: "Option1" | null;
};
