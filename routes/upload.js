const router = module.exports = require('express').Router();
const multer = require('multer');
const ImageUpload = require('../models/ImageUpload');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploaded');
    },
    filename: (req, file, cb) => {
        console.log("Hello?");
        let img = new ImageUpload({});
        img.filePath = "uploaded/" + img._id + "." + file.originalname.split(".").pop();
        img.save().then(() => {
            console.log("Saved");
            cb(null, img._id + "." + file.originalname.split(".").pop());
        })
        .catch(err => console.log(err));
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('photo'), (req, res) => {
    console.log("Retrieving POST request.");
    res.status(201).json({
        fileName: req.file.filename
    }).end();
});