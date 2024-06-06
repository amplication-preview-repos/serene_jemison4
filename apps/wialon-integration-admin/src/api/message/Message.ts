import { Device } from "../device/Device";
import { Location } from "../location/Location";

export type Message = {
  createdAt: Date;
  data: string | null;
  device?: Device | null;
  id: string;
  location?: Location | null;
  timestamp: Date | null;
  updatedAt: Date;
};
