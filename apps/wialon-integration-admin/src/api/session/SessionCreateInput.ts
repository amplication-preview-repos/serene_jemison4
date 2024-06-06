import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type SessionCreateInput = {
  device?: DeviceWhereUniqueInput | null;
  endedAt?: Date | null;
  startedAt?: Date | null;
  status?: "Option1" | null;
};
