const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    filePath: { type: String, required: false }
});

const ImageUpload = module.exports = mongoose.model('images', ImageSchema);