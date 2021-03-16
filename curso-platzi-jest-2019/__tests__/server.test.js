const { response } = require("express");
const request = require("supertest");
const app = require("../src/server/app");

describe("Mini server", () => {
  test("Server has get method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hi");
        done();
      });
  });
});
