const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imguploader', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected."))
.catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

const uploadRoute = require('./routes/upload');
const imagesRoute = require('./routes/images');

app.use('/upload', uploadRoute);
app.use('/images', imagesRoute);

app.listen(3000, () => console.log('port 3000'));
