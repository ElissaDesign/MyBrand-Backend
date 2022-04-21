import multer from "multer";
import fs from "fs";
import path from "path"


// Creating uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary

if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}
  
// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

  
const upload = multer({ storage: storage });

export default upload;
 