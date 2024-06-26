const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Adrien:1234@apimongodb.h3eaxwl.mongodb.net/?retryWrites=true&w=majority&appName=APIMongoDB";
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connexion à la base de données MongoDB
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Routes
const defisRouter = require('./routes/defis');
app.use('/defis', defisRouter);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});