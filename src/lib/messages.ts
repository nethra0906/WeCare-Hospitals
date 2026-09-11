import type { ContactMessage } from "../types";
import { createId, readList, writeList } from "./storage";

const KEY = "messages";

export function addMessage(data: { name: string; email: string; message: string }): {
  ok: boolean;
} {
  const record: ContactMessage = {
    id: createId(),
    createdAt: new Date().toISOString(),
    ...data,
  };
  const all = readList<ContactMessage>(KEY);
  return { ok: writeList(KEY, [...all, record]) };
}
