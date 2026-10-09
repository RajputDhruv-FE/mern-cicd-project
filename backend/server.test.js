
const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("./server");

test("GET / returns the API health message", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    message: "MERN CI/CD API is running!",
  });
});

test("GET /api/products returns three products", async () => {
  const response = await request(app).get("/api/products");

  assert.equal(response.status, 200);
  assert.equal(response.body.length, 3);

  assert.deepEqual(response.body[0], {
    id: 1,
    name: "Laptop",
    price: 55000,
  });
});
