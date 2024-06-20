import { FooterWhereInput } from "./FooterWhereInput";
import { FooterOrderByInput } from "./FooterOrderByInput";

export type FooterFindManyArgs = {
  where?: FooterWhereInput;
  orderBy?: Array<FooterOrderByInput>;
  skip?: number;
  take?: number;
};
