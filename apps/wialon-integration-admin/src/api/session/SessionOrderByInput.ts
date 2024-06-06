import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  endedAt?: SortOrder;
  id?: SortOrder;
  startedAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
