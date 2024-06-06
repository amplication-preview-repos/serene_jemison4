import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type DeviceWhereInput = {
  id?: StringFilter;
  imei?: StringNullableFilter;
  lastLocation?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  status?: "Option1";
};
