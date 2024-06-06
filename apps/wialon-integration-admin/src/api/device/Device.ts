import { Message } from "../message/Message";
import { Session } from "../session/Session";

export type Device = {
  createdAt: Date;
  id: string;
  imei: string | null;
  lastLocation: string | null;
  messages?: Array<Message>;
  name: string | null;
  sessions?: Array<Session>;
  status?: "Option1" | null;
  updatedAt: Date;
};
