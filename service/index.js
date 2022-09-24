const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const mongodb_creds = require('../credentials/mongodb_creds')

const uri = "mongodb+srv://" + mongodb_creds.MongoDB_Creds + mongodb_creds.MongoDB_Cluster + "/?retryWrites=true&w=majority";

const client = new MongoClient(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });

const app = express();

app.use(express.json());

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

app.post("/create", (req, res) => {
    // will create a player with a name, avatar, and super power
    const id = uuid();
    const body = req.body;
    const user = {
        _id: id,
        name: body['name'] ? body['name'] : 'Anonymous',
        avatar: body['avatar'] ? body['avatar'] : '',
        superpower: body['superpower'] ? body['superpower'] : '' 
    };

    client.connect().then(result => {
        console.log(result);
        const collection = client.db("Avatars").collection("Users");
        collection.insertOne(user).then(() => {
            client.close();
            res.sendStatus(200);
        }).catch((err) => {
            console.error(err);
            client.close();
            res.sendStatus(501)
        });
    });

});

app.listen(3000, () => {
    console.log('api server is running...');
});

