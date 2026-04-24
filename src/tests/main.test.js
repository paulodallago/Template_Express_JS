const request = require("supertest");
const app = require("../app");
const sequelize = require("../db");

let token;
let userId;
let sessionId;

describe("Full API flow", () => {
  afterAll(async () => {
    await sequelize.close();
  });

  test("1. Create user", async () => {
    const res = await request(app).post("/api/person").send({
      name: "User",
      age: 21,
      email: "user@gmail.com",
      password: "senha",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");

    userId = res.body.id;
  });

  test("2. Login", async () => {
    const res = await request(app).post("/api/login").send({
      email: "user@gmail.com",
      password: "senha",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");

    token = res.body.token;
  });

  test("3. Update user", async () => {
    const res = await request(app).put(`/api/person/${userId}`).send({
      name: "UserUpdated",
      age: 22,
    });

    expect(res.statusCode).toBe(200);
  });

  test("4. Create session", async () => {
    const res = await request(app)
      .post("/api/session")
      .set("Authorization", `Bearer ${token}`)
      .send({
        host: userId,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");

    sessionId = res.body.id;
  });

  test("5. Get session by id", async () => {
    const res = await request(app).get(`/api/session/${sessionId}`);

    expect(res.statusCode).toBe(200);
  });

  test("6. Refresh session", async () => {
    const res = await request(app)
      .put(`/api/session/refresh/${sessionId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  test("7. Close session", async () => {
    const res = await request(app)
      .put(`/api/session/close/${sessionId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  test("8. Delete session", async () => {
    const res = await request(app)
      .delete(`/api/session/${sessionId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(204);
  });

  test("9. Delete user", async () => {
    const res = await request(app).delete(`/api/person/${userId}`);

    expect(res.statusCode).toBe(204);
  });
});
