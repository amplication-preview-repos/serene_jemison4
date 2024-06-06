import { MessageCreateNestedManyWithoutLocationsInput } from "./MessageCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  altitude?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  messages?: MessageCreateNestedManyWithoutLocationsInput;
  timestamp?: Date | null;
};
