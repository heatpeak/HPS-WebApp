const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require('dotenv').config();

// middleware
const corsOptions = {
    origin: ['http://localhost','https://heatpeakstudio.com']
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
mongoose.connect('mongodb+srv://admin:9yRFhKEgbzFqQU9i@bestdbever.kplqcma.mongodb.net/?retryWrites=true&w=majority').then(() => {
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.use(express.static('./frontend'));
app.get('/', (req, res) => {
    res.sendFile('./frontend/src/index.html');
});