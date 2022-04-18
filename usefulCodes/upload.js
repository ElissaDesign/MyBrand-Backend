const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "images");
    }, 
    filename: (req, file, cb) =>{
        cb(null, "test.png");
    },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json('File has been uploaded');
});