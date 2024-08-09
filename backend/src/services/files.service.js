const fetch = require("node-fetch");
const utils = require("../utils");

const getData = async () => {
  try {
    const paths = await getList();
    const files = [];

    for (let file of paths.files) {
      const fileData = await getFile(file);

      if (fileData === undefined) continue;

      files.push(fileData);
    }

    return files;
  } catch (e) {
    console.error("LOG-- ERROR: ", err);
    throw new Error("Error in requests to API");
  }
};

const getFile = async (filename) => {
  try {
    const getfile = await fetch(
      `https://echo-serv.tbxnet.com/v1/secret/file/${filename}`,
      {
        headers: {
          authorization: "Bearer aSuperSecretKey",
        },
      }
    );
    const fileBuffer = await getfile.arrayBuffer();

    return utils.csvToJSON(utils.toString(fileBuffer));
  } catch (e) {
    console.error("LOG-- ERROR: ", err);
    throw new Error("Error in requests to API - getFile");
  }
};

const getList = async () => {
  try {
    const getFiles = await fetch(
      "https://echo-serv.tbxnet.com/v1/secret/files",
      {
        headers: {
          authorization: "Bearer aSuperSecretKey",
        },
      }
    );

    const filePaths = await getFiles.json();

    return filePaths;
  } catch (error) {
    console.error("LOG-- ERROR: ", err);
    throw new Error("Error in requests to API - getList");
  }
};

module.exports = {
  getData,
  getList,
  getFile,
};
