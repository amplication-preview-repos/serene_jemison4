import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  data?: StringNullableFilter;
  device?: DeviceWhereUniqueInput;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
