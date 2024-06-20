import { JsonValue } from "type-fest";

export type Footer = {
  createdAt: Date;
  id: string;
  quotes: string | null;
  socialLinks: JsonValue;
  updatedAt: Date;
};
