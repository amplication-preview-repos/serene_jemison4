import { Device } from "../device/Device";

export type Session = {
  createdAt: Date;
  device?: Device | null;
  endedAt: Date | null;
  id: string;
  startedAt: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
