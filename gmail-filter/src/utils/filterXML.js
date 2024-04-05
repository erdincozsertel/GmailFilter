export const baseXML = `<?xml version= "1.0 " encoding= "UTF-8 "?>
<feed  xmlns= "http://www.w3.org/2005/Atom " xmlns:apps= "http://schemas.google.com/apps/2006 ">
    <title>Mail Filiters</title>
</feed>`;

export function generateFilterEntry(params) {
    let entryXML = `
      <entry>
        <category term="filter">
        </category>
        <title>${params.title}</title>
        ${properties}
      </entry>`;
      let properties = "";
      for (const [key, value] of Object.entries(params.properties)) {
        properties += `\n      <apps:property name="${key}" value="${value}"/>`;
      }
      return entryXML;
  }