const imageDownloader = require("image-downloader");
const fs = require("fs");

module.exports.uploadImg = async (req, res, next) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "../../uploads/" + newName,
  });
  res.json(newName);
};

module.exports.uploadFile = async (req, res, next) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = "uploads/" + originalname;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads/", ""));
  }

  res.json(uploadedFiles);
};
