import { NavigationWhereInput } from "./NavigationWhereInput";
import { NavigationOrderByInput } from "./NavigationOrderByInput";

export type NavigationFindManyArgs = {
  where?: NavigationWhereInput;
  orderBy?: Array<NavigationOrderByInput>;
  skip?: number;
  take?: number;
};
