import { isNullOrWhitespace } from "../helpers/value";
import { Category, Filter, Entry, Property, Section } from "./properties";
export function generateOutputXML(filter: Filter) {
  let entryXML = generateFilterEntry(filter);
  return `<?xml version= "1.0 " encoding= "UTF-8 "?>
    <feed  xmlns= "http://www.w3.org/2005/Atom " xmlns:apps= "http://schemas.google.com/apps/2006 ">
        <title>Mail Filiters</title>
        ${entryXML}
    </feed>`;
}

function generateFilterEntry(filter: Filter) {
  let entries = ``;
  for (const entry of filter.entries) {
    let properties = ``;
    let hasAction = false; // whether or not the entry has an action (stared, label, etc.)
    let shouldTrash = false; // whether or not the entry should be trashed

    for (const property of entry.properties) {
      if (!isNullOrWhitespace(property.value)) {
        if (
          !hasAction &&
          property.section == Section.Action &&
          property.name != "shouldTrash"
        ) {
          hasAction = true;
        }

        if (property.name != "shouldTrash") {
          if (property.name != "smartLabelToApply") {
            properties += `\n      <apps:property name="${property.name}" value="${property.value}"/>`;
          } else {
            properties += `\n      <apps:property name="${
              property.name
            }" value="smartlabel_${
              Category[property.value as keyof typeof Category]
            }"/>`;
          }
        } else if (property.value == true) {
          shouldTrash = true;
        }
      }
    }

    if (shouldTrash == true && hasAction == false) {
      properties += `\n      <apps:property name="shouldTrash" value="true"/>`;
    } else if (shouldTrash == true && hasAction == true) {
      console.log("shouldTrash is true but hasAction is also true");
    }

    let entryXML = `
        <entry>
          <category term="filter">
          </category>
          <title>${entry.title}</title>
          ${properties}
        </entry>`;
    if (properties.length === 0) {
      entryXML = ``;
    }
    entries += entryXML;
  }
  return entries;
}
