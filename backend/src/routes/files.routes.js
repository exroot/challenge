const { Router } = require("express");
const fileController = require("../controllers/files.controller");

const router = Router();

router.get("/data", fileController.getFileData);
router.get("/list", fileController.getFileList);

module.exports = router;
