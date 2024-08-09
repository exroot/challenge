const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/app");
const mocks = require("../mocks");

chai.should();
chai.use(chaiHttp);

describe("Controller", () => {
  describe("/GET files/list", () => {
    it("it should GET all the files names", (done) => {
      mocks.listOfFiles();
      chai
        .request(server)
        .get("/files/list")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.a("object");
          done();
        });
    });

    it("it should GET error 404", (done) => {
      mocks.listOfFilesWithError();
      chai
        .request(server)
        .get("/files/list")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("/GET files/data", () => {
    it("it should GET list of csv files", (done) => {
      mocks.listOfFiles();
      mocks.file1();
      mocks.file2();
      mocks.file3();

      chai
        .request(server)
        .get("/files/data")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.a("array");
          res.body.should.to.have.lengthOf(2);
          done();
        });
    });

    it("it should GET a file", (done) => {
      mocks.file2();

      chai
        .request(server)
        .get("/files/data?filename=test2.csv")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.a("object");
          done();
        });
    });

    it("it should GET error 404", (done) => {
      mocks.listOfFilesWithError();
      chai
        .request(server)
        .get("/files/list")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("it should GET error 500", (done) => {
      mocks.listOfFilesWithError500();
      chai
        .request(server)
        .get("/files/list")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
