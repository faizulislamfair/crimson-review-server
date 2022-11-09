const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());



// $setOnInsert: { StudentAdmissiondate: new Date() } }




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pqumcav.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





async function run() {
    try {
        const userCollection = client.db('onlineServices').collection('services');


        app.get('/', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const services = await cursor.limit(3).toArray();
            res.send(services);
        })


        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })
    }
    finally {

    }
}

run().catch(err => console.log(err));




app.listen(port, () => {
    console.log(`Fair Online Delivery Service Review is listening on port: ${port}`);
})