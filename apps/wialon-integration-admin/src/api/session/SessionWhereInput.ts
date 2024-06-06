import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SessionWhereInput = {
  device?: DeviceWhereUniqueInput;
  endedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  startedAt?: DateTimeNullableFilter;
  status?: "Option1";
};
