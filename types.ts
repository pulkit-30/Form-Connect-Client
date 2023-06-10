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
