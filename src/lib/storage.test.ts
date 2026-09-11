import { describe, expect, it } from "vitest";
import {
  createId,
  readList,
  readValue,
  removeValue,
  writeList,
  writeValue,
} from "./storage";

describe("storage", () => {
  it("round-trips a list", () => {
    writeList("things", [1, 2, 3]);
    expect(readList<number>("things")).toEqual([1, 2, 3]);
  });

  it("returns an empty array when nothing is stored", () => {
    expect(readList("missing")).toEqual([]);
  });

  it("returns an empty array for corrupt JSON instead of throwing", () => {
    localStorage.setItem("wecare:broken", "{not json");
    expect(() => readList("broken")).not.toThrow();
    expect(readList("broken")).toEqual([]);
  });

  it("round-trips a single value and removes it", () => {
    writeValue("flag", { on: true });
    expect(readValue("flag")).toEqual({ on: true });
    removeValue("flag");
    expect(readValue("flag")).toBeNull();
  });

  it("creates unique ids", () => {
    const a = createId();
    const b = createId();
    expect(a).not.toEqual(b);
  });
});
