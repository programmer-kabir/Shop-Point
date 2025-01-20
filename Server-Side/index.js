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


    app.get("/category", async (req, res) => {
      try {
        const result = await categoryCollection.find().toArray(); // Add 'await' here
        res.send(result);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
        res.status(500).send({ error: "Failed to fetch categories" });
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
