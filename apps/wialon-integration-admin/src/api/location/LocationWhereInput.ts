import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LocationWhereInput = {
  altitude?: IntNullableFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  messages?: MessageListRelationFilter;
  timestamp?: DateTimeNullableFilter;
};
