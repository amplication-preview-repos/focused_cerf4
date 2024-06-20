import { Navigation as TNavigation } from "../api/navigation/Navigation";

export const NAVIGATION_TITLE_FIELD = "name";

export const NavigationTitle = (record: TNavigation): string => {
  return record.name?.toString() || String(record.id);
};
