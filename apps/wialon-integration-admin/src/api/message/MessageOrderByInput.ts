import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  deviceId?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
