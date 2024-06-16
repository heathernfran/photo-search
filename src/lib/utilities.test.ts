import { describe, expect, it } from "vitest";
import { buildImageUrl } from "./utilities";

describe("buildImageUrl()", () => {
  it("returns an image url with specified size", () => {
    const mockPhoto = {
      id: "mockId",
      secret: "mockSecret",
      server: "mockServer",
      title: "mockTitle",
    };
    const size = "mockSize";

    expect(buildImageUrl(mockPhoto, size)).toBe(
      "https://live.staticflickr.com/mockServer/mockId_mockSecret_mockSize.jpg"
    );
  });
});
