const router = module.exports = require('express').Router();
const ImageUpload = require('../models/ImageUpload');
const path = require('path');

router.get('/:imgfile', (req, res) => {
    let { imgfile } = req.params;
    let id = imgfile.split(".").shift();
    ImageUpload.findById(id)
    .then(v => {
        console.log(v.filePath);
        res.render('image', {
            img: "/" + v.filePath
        });
    })
    .catch(err => {
        console.log(err);
    })
});