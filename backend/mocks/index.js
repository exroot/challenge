const nock = require("nock");

const listOfFiles = () =>
  nock("https://echo-serv.tbxnet.com/v1")
    .get("/secret/files")
    .reply(200, {
      files: ["test1.csv", "test2.csv", "test3.csv"],
    });

const listOfFilesWithError = () =>
  nock("https://echo-serv.tbxnet.com/v1").get("/secret/files").reply(404);

const listOfFilesWithError500 = () =>
  nock("https://echo-serv.tbxnet.com/v1").get("/secret/files").reply(500);

const file1 = () =>
  nock("https://echo-serv.tbxnet.com/v1")
    .get("/secret/file/test1.csv")
    .replyWithFile(200, __dirname + "/test1.csv");

const file2 = () =>
  nock("https://echo-serv.tbxnet.com/v1")
    .get("/secret/file/test2.csv")
    .replyWithFile(200, __dirname + "/test2.csv");

const file3 = () =>
  nock("https://echo-serv.tbxnet.com/v1")
    .get("/secret/file/test3.csv")
    .replyWithFile(200, __dirname + "/test3.csv");

module.exports = {
  listOfFiles,
  file1,
  file2,
  file3,
  listOfFilesWithError,
  listOfFilesWithError500,
};
