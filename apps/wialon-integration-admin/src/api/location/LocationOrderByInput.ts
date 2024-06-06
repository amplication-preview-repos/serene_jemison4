import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  altitude?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
