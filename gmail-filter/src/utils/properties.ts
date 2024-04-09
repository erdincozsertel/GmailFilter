export enum Category {
  Primary = "smartlabel_primary",
  Social = "smartlabel_social",
  Updates = "smartlabel_notification",
  Forums = "smartlabel_group",
  Promotions = "smartlabel_promo",
}
export enum Section {
  Filiter = "Filter",
  Action = "Action",
}
export enum UserMode {
  EasyMode = "Always",
  NormalMode = "NormalMode",
  ExpertMode = "ExpertMode",
}

export class Filter {
  title: string;
  entries: Entry[];
  id: number;
  constructor(title: string, id: number, entries: Entry[]) {
    this.title = title;
    this.id = id;
    this.entries = entries;
  }
}
export class Entry {
  title: string;
  id: number;
  properties: Property[];

  constructor(title: string, id: number, properties: Property[]) {
    this.title = title;
    this.id = id;
    this.properties = properties;
  }
}
interface StringDictionary {
  [key: string]: string;
}

export class Property {
  name: string;
  id: number;
  visableName: string;
  type: string;
  description: string;
  visable: UserMode;
  section: Section;
  value: any; 
  disabled?: boolean;
  style: StringDictionary;

  constructor(
    name: string,
    id: number,
    visableName: string,
    type: string,
    description: string,
    visable: UserMode,
    section: Section,
    value: any, 
    style: StringDictionary
  ) {
    this.name = name;
    this.id = id;
    this.visableName = visableName;
    this.type = type;
    this.description = description;
    this.visable = visable;
    this.section = section;
    this.value = value;
    this.style = style;
  }
}
export const propertyList: Property[] = [
  {
    name: "from",
    visableName: "From",
    type: "string",
    description: "The sender of the email",
    visable: UserMode.EasyMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-full px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
  {
    name: "to",
    visableName: "To",
    type: "string",
    description: "The recipient of the email",
    visable: UserMode.NormalMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-full px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
  {
    name: "cc",
    visableName: "Cc",
    type: "string",
    description: "The carbon copy recipient of the email",
    visable: UserMode.ExpertMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-full px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
  {
    name: "bcc",
    visableName: "Bcc",
    type: "string",
    description: "The blind carbon copy recipient of the email",
    visable: UserMode.ExpertMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-full px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
  {
    name: "subject",
    visableName: "Subject",
    type: "string",
    description: "The subject of the email",
    visable: UserMode.EasyMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-full px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
  {
    name: "hasTheWord",
    visableName: "Has the word",
    type: "string",
    description: "Contains the word(s)",
    visable: UserMode.EasyMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-full px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
  {
    name: "doesNotHaveTheWord",
    visableName: "Doesn't have",
    type: "string",
    description: "Does not contain the word(s)",
    visable: UserMode.EasyMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-full px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
  {
    name: "hasAttachment",
    visableName: "Has attachment",
    type: "boolean",
    description: "Has an attachment",
    visable: UserMode.NormalMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "excludeChats",
    visableName: "Don't include chats",
    type: "boolean",
    description: "Don't include chats",
    visable: UserMode.NormalMode,
    section: Section.Filiter,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "shouldArchive",
    visableName: "Skip the Inbox (Archive it)",
    type: "boolean",
    description: "Archive the mail",
    visable: UserMode.NormalMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "shouldMarkAsRead",
    visableName: "Mark as read",
    type: "boolean",
    description: "Mark as read",
    visable: UserMode.NormalMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "shouldStar",
    visableName: "Star it",
    type: "boolean",
    description: "Star the mail",
    visable: UserMode.EasyMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "label",
    visableName: "Apply the label",
    type: "string",
    description: "The label to apply",
    visable: UserMode.NormalMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-full px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
  //TODO: Forward the mail
  {
    name: "shouldTrash",
    visableName: "Delete it",
    type: "boolean",
    description: "Delete the mail",
    visable: UserMode.NormalMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "shouldNeverSpam",
    visableName: "Never send it to spam",
    type: "boolean",
    description: "Never spam the mail",
    visable: UserMode.NormalMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "shouldAlwaysMarkAsImportant",
    visableName: "Always mark as important",
    type: "boolean",
    description: "Always mark as important",
    visable: UserMode.NormalMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "shoulNeverMarkAsImportant",
    visableName: "Never mark as important",
    type: "boolean",
    description: "Never mark as important",
    visable: UserMode.NormalMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-1/5 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "py-3 px-4 mb-3 leading-tight",
    },
    id: 0
  },
  {
    name: "smartLabelToApply",
    visableName: "Catogorize as",
    type: "string",
    description: "Category to apply",
    visable: UserMode.NormalMode,
    section: Section.Action,
    value: "",
    style: {
      container: "border border-gray-300 w-1/4 px-3 mb-6",
      label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
      input: "appearance-none block w-full text-gray-700 border borderlack-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    },
    id: 0
  },
];
