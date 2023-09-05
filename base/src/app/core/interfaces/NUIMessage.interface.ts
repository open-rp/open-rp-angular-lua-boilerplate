// We will use the JSONAPI standard for our NUI messages
// https://jsonapi.org/

import { NUIMessageTypes } from "../enums/NUIMessageTypes.enum";

export interface NUIMessage {
  data: {
    type: NUIMessageTypes;
    id?: string;
    attributes: any;
  };
}