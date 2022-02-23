const request = require("supertest");
const should = require("should");
const app = require("../../app.js");

describe("GET - /items", () => {
  it("성공) 배열을 출력한다.", (done) => {
    request(app)
      .get("/items")
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.should.be.instanceOf(Array);
        done();
      });
  });
});

describe("DELETE - /items/todo/1", () => {
  it("성공) 204를 응답한다.", (done) => {
    request(app).delete("/items/todo/1").expect(204);
    done();
  });
  it("실패) /items/todos/1", (done) => {
    request(app).delete("/items/todos/1").expect(400);
    done();
  });
  it("실패) /items/todo/999", (done) => {
    request(app).delete("/items/todo/999").expect(400);
    done();
  });
});

describe("POST - /items", () => {
  it("성공) 상태코드 201을 반환한다.", (done) => {
    request(app).post("/items").send({ text: "HTTP 공부하기" }).expect(201);
    done();
  });

  it("성공) 생성된 객체를 반환한다.", (done) => {
    const newText = "리액트 공부하기";
    request(app)
      .post("/items")
      .send({ text: newText })
      .end((err, res) => {
        res.status.should.equal(201);
        res.body.should.have.property("id");
        res.body.should.have.property("category");
        res.body.should.have.property("text", newText);
        res.body.should.have.property("createdAt");
        res.body.should.have.property("updatedAt");
        done();
      });
  });
  it("실패) text가 없는 경우", (done) => {
    request(app).post("/items").send({}).expect(400);
    done();
  });
});

describe("PUT - /items/:id", () => {
  it("성공) text 값을 변경한다.", (done) => {
    const changedText = "타입스크립트 공부하기";
    request(app)
      .put("/items/1")
      .send({ text: changedText })
      .end((err, res) => {
        res.body.should.have.property("text", changedText);
      });
    done();
  });

  it("실패) id가 없는 경우", (done) => {
    const changedText = "타입스크립트 공부하기";
    request(app).put("/items/999").send({ text: changedText }).expect(404);
    done();
  });
});

describe("PUT - /items/:category/:id", () => {
  it("성공) category 값을 변경한다.", (done) => {
    request(app)
      .put("/items/todo/2")
      .end((err, res) => {
        res.body.should.have.property("category", "doing");
      });
    done();
  });

  it("실패) 없는 id이다.", (done) => {
    request(app).put("/items/todo/999").expect(404);
    done();
  });

  it("실패) category가 todo나 doing이 아닌 값이다.", (done) => {
    request(app)
      .put("/items/done/1")
      .end((err, res) => {
        res.status.should.be.equal(400);
      });
    done();
  });

  it("실패) category가 todo나 doing이 아닌 값이다.", (done) => {
    request(app)
      .put("/items/todos/1")
      .end((err, res) => {
        res.status.should.be.equal(400);
      });
    done();
  });
});
