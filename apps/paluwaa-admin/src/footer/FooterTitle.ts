import { Footer as TFooter } from "../api/footer/Footer";

export const FOOTER_TITLE_FIELD = "id";

export const FooterTitle = (record: TFooter): string => {
  return record.id?.toString() || String(record.id);
};
