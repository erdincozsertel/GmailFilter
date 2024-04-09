import { Property } from "../utils/properties";

export function isNullOrWhitespace(value: any): boolean {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim().length === 0) ||
    (Array.isArray(value) &&
      value.length === 0 &&
      value.forEach((item) => !isNullOrWhitespace(item))) ||
    (typeof value === "boolean" && value === false)
  );
}
