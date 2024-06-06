import { Message } from "../message/Message";

export type Location = {
  altitude: number | null;
  createdAt: Date;
  id: string;
  latitude: number | null;
  longitude: number | null;
  messages?: Array<Message>;
  timestamp: Date | null;
  updatedAt: Date;
};
