import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type MessageUpdateInput = {
  data?: string | null;
  device?: DeviceWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  timestamp?: Date | null;
};
