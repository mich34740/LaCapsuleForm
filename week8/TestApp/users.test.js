const request = require("supertest");
const app = require("./app");

let startTime;
let originalEnv;

beforeAll(() => {
  originalEnv = { ...process.env };

  // Variables spécifiques aux tests
  process.env.NODE_ENV = "test";
  process.env.API_URL = "https://jsonplaceholder.typicode.com";

  console.log("🧪 Test environment loaded");
});

beforeEach(() => {
  startTime = Date.now();
});

afterEach(() => {
  const duration = Date.now() - startTime;
  console.log(`⏱ Request took ${duration}ms`);

  expect(duration).toBeLessThan(1000);
});

afterAll(() => {
   // Restauration de l'environnement initial
  process.env = originalEnv;

  console.log("♻️ Environment restored");
});

describe("GET /users performance", () => {
  test("should respond in less than 1 second", async () => {
    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});