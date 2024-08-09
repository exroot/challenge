const filesService = require("../services/files.service");

const getFileData = async (req, res) => {
  try {
    let resp = null;
    const filename = req.query.filename;

    if (filename) resp = await filesService.getFile(filename);
    else resp = await filesService.getData();

    if (!resp) {
      res.status(404).json("File or data Not Found");
    }

    res.json(resp);
  } catch (error) {
    console.error("LOG-- ERROR getFileData: ", err);
    res.status(500).send("Internal Error");
  }
};

const getFileList = async (req, res) => {
  try {
    const filesResp = await filesService.getList();

    if (!filesResp) {
      res.status(404).json("Data Not Found");
    }

    res.send(filesResp);
  } catch (error) {
    console.error("LOG-- ERROR getFileList: ", err);
    res.status(500).send("Internal Error");
  }
};

module.exports = {
  getFileData,
  getFileList,
};
