import API from "../src/api";

describe("ASYNC - Get characters", () => {
  test("There are results", (done) => {
    API.CHARACTERS.get().then((response) => {
      const { count } = response.data.info;

      expect(count).toBeGreaterThan(0);

      done();
    });
  });
});

describe("Response structure", () => {
  test("Response has right structure", (done) => {
    API.CHARACTERS.get().then((response) => {
      expect(response.data).toHaveProperty("info")
      expect(response.data).toHaveProperty("info.count")
      expect(response.data).toHaveProperty("info.pages")
      expect(response.data).toHaveProperty("info.next")
      expect(response.data).toHaveProperty("info.prev")

      const firstIndexResult = 0

      expect(response.data).toHaveProperty("results")
      expect(response.data).toHaveProperty(["results", firstIndexResult, "id"])
      expect(response.data).toHaveProperty(["results", firstIndexResult, "name"])
      expect(response.data).toHaveProperty(["results", firstIndexResult, "status"])
      expect(response.data).toHaveProperty(["results", firstIndexResult, "origin", "name"])

      done();
    });
  });
});
