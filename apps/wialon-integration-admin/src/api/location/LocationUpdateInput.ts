import { MessageUpdateManyWithoutLocationsInput } from "./MessageUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  altitude?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  messages?: MessageUpdateManyWithoutLocationsInput;
  timestamp?: Date | null;
};
