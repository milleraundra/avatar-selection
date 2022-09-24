const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require ("uuid");

const app = express();

app.get("/avatars", (req, res) => {
    res.json({
        "Russel": {
            "url": "images/dino/Idle (1).png"
        },
        "Tank": {
            "url": "images/robot/Idle (1).png"
        },
        "Stella": {
            "url": "images/ninja/Idle__000.png"
        }
    });
});

app.listen(3000, () => {
    console.log('api server is running...');
});

