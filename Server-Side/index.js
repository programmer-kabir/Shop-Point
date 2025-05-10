const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 3000;

// Middle ware
app.use(cors());
app.use(express.json());

// MongoDb Connect
const url = `mongodb+srv://shop-point:pa1Kko71kMxCFuHj@cluster0.0i3pjbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const dbConnect = async () => {
  try {
    client.connect();
    // Mongo Db Collection
    const categoryCollection = client.db("Shop-Point").collection("category");
const usersCollection = client.db('Shop-Point').collection("users")

    app.get("/category", async (req, res) => {
      try {
        const result = await categoryCollection.find().toArray(); // Add 'await' here
        res.send(result);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
        res.status(500).send({ error: "Failed to fetch categories" });
      }
    });
    app.post('/users', async (req, res) => {
      const data = req.body; // Get the data directly from the request body
      try {
        const result = await usersCollection.insertOne(data); // Insert the data
        res.send(result); // Send back the inserted data or success message
      } catch (error) {
        console.error("Error inserting user data:", error.message);
        res.status(500).send({ error: "Failed to register user" });
      }
    });
    
    app.get("/users", async (req, res) => {
      try {
        const result = await usersCollection.find().toArray(); // Retrieve all users from the collection
        res.send(result); // Send back the result
      } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).send({ error: "Failed to fetch users" });
      }
    });
    
    // Mongo Db Api
    console.log("Database Connect Successfully");
  } catch (error) {
    console.log(error.message);
  }
};
// dbConnect().catch(console.dir);

dbConnect();
// Express Api
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
