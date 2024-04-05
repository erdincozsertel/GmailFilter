import { Category } from "./properties";
export function generateOutputXML(filiters) {
  let entryXML = generateFilterEntry(filiters);
  return `<?xml version= "1.0 " encoding= "UTF-8 "?>
    <feed  xmlns= "http://www.w3.org/2005/Atom " xmlns:apps= "http://schemas.google.com/apps/2006 ">
        <title>Mail Filiters</title>
        ${entryXML}
    </feed>`;
}

function generateFilterEntry(filiters) {
  let entries = ``;
  for (const [key, value] of Object.entries(filiters)) {
    let properties = ``;
    let params = filiters.params;
    let hasAction = false;
    let shouldTrash = false;

    for (const [key, value] of Object.entries(params.properties)) {
      if (key.section == "Action" && key.name != "shouldTrash") {
        hasAction = true;
      }
      if (key.name != "shouldTrash") {
        if (key.name != "smartLabelToApply") {
          properties += `\n      <apps:property name="${key}" value="${value}"/>`;
        } else {
          //TODO: Convert to TypeScript to add smartlabel
          // properties += `\n      <apps:property name="${key}" value="smartlabel_${Category[value as keyof typeof Category]}"/>`;
        }
      } else if (value == true) {
        shouldTrash = true;
      }
    }
    if (shouldTrash == true) {
      if (hasAction == false) {
        properties = `\n      <apps:property name="shouldTrash" value="true"/>`;
      } else {
        console.log("shouldTrash is true but hasAction is also true");
      }
    }

    let entryXML = `
        <entry>
          <category term="filter">
          </category>
          <title>${filiters.title}</title>
          ${properties}
        </entry>`;
    if (properties.length === 0) {
      entryXML = ``;
    }
    entries += entryXML;
  }
  return entries;
}
