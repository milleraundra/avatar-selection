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
app.use(cors({
    origin: 'http://localhost:8080'
}))

app.get("/avatars", (req, res) => {
    res.json([
        {
            "name": "Russel",
            "url": "dino/dino.png"
        },
        {
            "name": "Tank",
            "url": "robot/robot.png"
        },
        {
            "name": "Stella",
            "url": "ninja/ninja.png"
        }
    ]);
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

