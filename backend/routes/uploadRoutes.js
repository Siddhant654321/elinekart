import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Images only!"); 
  }
}

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
  limits: { fileSize: 5 * 1024 * 1024 } 
});


router.post("/", upload.array("images", 5), (req, res) => {
  const filePaths = req.files.map(file => `/${file.path}`);
  res.send({
    message: "Images uploaded",
    images: filePaths, 
  });
});

export default router;
