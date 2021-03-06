const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/scrabble', {
    useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
    dest: '../front-end/public/images/',
    limits: {
        fileSize: 10000000
    }
});

// Create a scheme for users in the museum: a title (name/username) and a path to a profilePicture, user bio, highscore, and gamesPlayed.
const itemSchema = new mongoose.Schema({
    title: String,
    password: String,
    path: String,
    bio: String,
    highScore: Number,
    gamesPlayed: Number,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Delete an item
app.delete('/api/items/:id', async (req, res) => {
    console.log("Delete", req.params.id);
    try {
        await Item.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Update user
app.put('/api/items/:id', async (req, res) => {
    console.log("Update", req.params.id);
    try {
        console.log(req.body)
        item = await Item.findOneAndUpdate({
            _id: req.params.id
        }, req.body);
        res.json(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all of the items/users in the db.
app.get('/api/items', async (req, res) => {
    try {
        let items = await Item.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

// Create a new item/user in the db: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
    const item = new Item({
        title: req.body.title,
        password: req.body.password,
        path: req.body.path,
        bio: req.body.bio,
        highScore: 0,
        gamesPlayed: 0,
    });
    try {
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/items/:title', async (req, res) => {
    try {
        const currUser = await Item.findOne({ title: req.params.title });
        res.json(currUser).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.listen(3000, () => console.log('Server listening on port 3000!'));
