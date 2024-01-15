const express = require("express");
const { uploadImg } = require("../controllers/upload.controller");
const { uploadFile } = require("../controllers/upload.controller");
const multer = require("multer");

const router = express.Router();
const photosMiddleware = multer({ dest: "uploads/" });

router.post("/upload-by-link", uploadImg);
router.post(
  "/upload-from-device",
  photosMiddleware.array("photos", 100),
  uploadFile
);

module.exports = router;
