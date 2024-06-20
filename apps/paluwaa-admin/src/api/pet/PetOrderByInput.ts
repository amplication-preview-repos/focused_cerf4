import { SortOrder } from "../../util/SortOrder";

export type PetOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
