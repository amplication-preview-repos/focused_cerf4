import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type FooterWhereInput = {
  id?: StringFilter;
  quotes?: StringNullableFilter;
  socialLinks?: JsonFilter;
};
