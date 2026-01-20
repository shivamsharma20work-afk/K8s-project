const request = require("supertest");
const app = require("../src/app");

describe("API Testing", () => {
  test("GET /health should return ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("POST /sum should return sum", async () => {
    const res = await request(app).post("/sum").send({ a: 10, b: 20 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(30);
  });

  test("POST /sum should fail if inputs not numbers", async () => {
    const res = await request(app).post("/sum").send({ a: "10", b: 20 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("a and b must be numbers");
  });
});
