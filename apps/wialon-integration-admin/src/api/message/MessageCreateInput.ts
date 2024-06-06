import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type MessageCreateInput = {
  data?: string | null;
  device?: DeviceWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  timestamp?: Date | null;
};
