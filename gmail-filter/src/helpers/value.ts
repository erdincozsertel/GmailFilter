import { Property } from "../utils/properties";

export function isNullOrWhitespace(
  value: any,
  isTest: boolean = false
): boolean {
  if (isTest) {
    let test = t1(value) || t2(value) || t3(value) || t4(value);
    console.log("test: " + test);
  }

  return (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0 && value.forEach((item) => !isNullOrWhitespace(item))) ||
    (typeof value === "boolean" && value === false)
  );
}

function t1(value: any) {
  console.log("null" + value === null);
  return value === null;
}

function t2(value: any) {
  console.log("undefined" + value === undefined);
  return value === undefined;
}

function t3(value: any) {
  console.log(
    "string" + typeof value === "string" && value.trim().length === 0
  );
  return typeof value === "string" && value.trim().length === 0;
}

function t4(value: any) {
  console.log("array" + Array.isArray(value) && value.length === 0);
  return Array.isArray(value) && value.length === 0;
}
