import timeConversion from "./time-converter";
import { describe, it, expect } from "@jest/globals";

describe("timeConversion", () => {
  it('should convert PM time to 24-hour format', () => {
    expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  });

  it('should keep AM time as is, except for 12 AM', () => {
    expect(timeConversion("04:59:59AM")).toBe("04:59:59");
  });

  it('should convert 12:00:00AM to 00:00:00', () => {
    expect(timeConversion("12:00:00AM")).toBe("00:00:00");
  });

  it('should convert 12:00:00PM to 12:00:00', () => {
    expect(timeConversion("12:00:00PM")).toBe("12:00:00");
  });

  it('should convert 12:45:54PM correctly', () => {
    expect(timeConversion("12:45:54PM")).toBe("12:45:54");
  });
});
