import { ReactNode } from "react";
export type User = {
  id: string;
  name: string;
  email: string;
};

export enum AlertMessageVariants {
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export enum AlertMessageTypes {
  REQUEST_ERROR = "REQUEST_ERROR",
  APPLICATION_ERROR = "CODE_ERROR",
}

export type AlertMessageType = {
  id: string;
  message: string;
  variant: AlertMessageVariants;
  type?: AlertMessageTypes;
};

export type ResponseType<I> =
  | {
      success: true;
      data: I;
      statusCode?: number;
    }
  | {
      success: false;
      error: {
        message: string;
      };
      statusCode?: number;
    };

export type SelectOption = {
  label: ReactNode;
  value: any;
  data?: string;
};

export enum Roles {
  OWNER = "owner",
  COLLABORATOR = "collaborator",
}
export type Organization = {
  id: string;
  name: string;
  category: string;
};
export type UserOrg = {
  id: string;
  organization: Organization;
  user: User;
  role: Roles;
};
export type Field = {
  id: string;
  label: string;
  description: string;
  isRequired: boolean;
  placeholder: string;
  defaultValue: any;
  type: string;
  meta: Record<string, any>;
  form: string;
};

export enum FieldTypes {
  TEXT = "text",
  NUMBER = "number",
  TELEPHONE = "tel",
  EMAIL = "email",
  PASSWORD = "password",
  DATE = "date",
  TIME = "time",
}
export enum PublicationStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVE = "archived",
}
export type Publication = {
  id: string;
  status: PublicationStatus;
  token: string;
};
export type Response = {
  id: string;
  form: string;
};
export type Form = {
  id?: string;
  name: string;
  description: string;
  fields: Field[];
  organization?: Organization;
  responses?: Response[];
  publication?: Publication;
};
export type Plugin = {
  id: string;
  name: string;
  description: string;
  meta: Record<string, any>;
  icon: string;
};
