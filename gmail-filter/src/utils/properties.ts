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
  Always = "Always",
  NormalMode = "NormalMode",
  ExpertMode = "ExpertMode",
}

export class Filter {
  title: string;
  entries: Entry[];
}
export class Entry {
  title: string;
  properties: Property[];
}
export class Property {
  name: string;
  visableName: string;
  type: string;
  description: string;
  visable: UserMode;
  section: Section;
  value: [string, string] | string | boolean | number;
  disabled?: boolean;
}

export const propertyList = [
  {
    name: "from",
    visableName: "From",
    type: "string",
    description: "The sender of the email",
    visable: "Always",
    section: "Filiter",
  },
  {
    name: "to",
    visableName: "To",
    type: "string",
    description: "The recipient of the email",
    visable: "NormalMode",
    section: "Filiter",
  },
  {
    name: "cc",
    visableName: "Cc",
    type: "string",
    description: "The carbon copy recipient of the email",
    visable: "ExpertMode",
    section: "Filiter",
  },
  {
    name: "bcc",
    visableName: "Bcc",
    type: "string",
    description: "The blind carbon copy recipient of the email",
    visable: "ExpertMode",
    section: "Filiter",
  },
  {
    name: "subject",
    visableName: "Subject",
    type: "string",
    description: "The subject of the email",
    visable: "Always",
    section: "Filiter",
  },
  {
    name: "hasTheWord",
    visableName: "Has the word",
    type: "string",
    description: "Contains the word(s)",
    visable: "Always",
    section: "Filiter",
  },
  {
    name: "doesNotHaveTheWord",
    visableName: "Doesn't have",
    type: "string",
    description: "Does not contain the word(s)",
    visable: "Always",
    section: "Filiter",
  },
  {
    name: "hasAttachment",
    visableName: "Has attachment",
    type: "boolean",
    description: "Has an attachment",
    visable: "NormalMode",
    section: "Filiter",
  },
  {
    name: "excludeChats",
    visableName: "Don't include chats",
    type: "boolean",
    description: "Don't include chats",
    visable: "NormalMode",
    section: "Filiter",
  },
  {
    name: "shouldArchive",
    visableName: "Skip the Inbox (Archive it)",
    type: "boolean",
    description: "Archive the mail",
    section: "Action",
  },
  {
    name: "shouldMarkAsRead",
    visableName: "Mark as read",
    type: "boolean",
    description: "Mark as read",
    section: "Action",
  },
  {
    name: "shouldStar",
    visableName: "Star it",
    type: "boolean",
    description: "Star the mail",
    visable: "Always",
    section: "Action",
  },
  {
    name: "label",
    visableName: "Apply the label",
    type: "string",
    description: "The label to apply",
    visable: "NormalMode",
    section: "Action",
  },
  //TODO: Forward the mail
  {
    name: "shouldTrash",
    visableName: "Delete it",
    type: "boolean",
    description: "Delete the mail",
    visable: "NormalMode",
    section: "Action",
    disable: "!hasAction",
  },
  {
    name: "shouldNeverSpam",
    visableName: "Never send it to spam",
    type: "boolean",
    description: "Never spam the mail",
    visable: "NormalMode",
    section: "Action",
  },
  {
    name: "shouldAlwaysMarkAsImportant",
    visableName: "Always mark as important",
    type: "boolean",
    description: "Always mark as important",
    visable: "NormalMode",
    section: "Action",
    disable: "isNotImportant",
  },
  {
    name: "shoulNeverMarkAsImportant",
    visableName: "Never mark as important",
    type: "boolean",
    description: "Never mark as important",
    visable: "NormalMode",
    section: "Action",
    disable: "isImportant",
  },
  {
    name: "smartLabelToApply",
    visableName: "Catogorize as",
    type: "string",
    descripton: "Category to apply",
    visable: "NormalMode",
    section: "Action",
  },
];
