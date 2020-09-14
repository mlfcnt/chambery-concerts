import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = async (req, res, next) => {
  if (!client.isConnected()) {
    console.log("Connecting to MongoDB...");
    await client.connect();
  }
  console.log("connected :)");
  req.dbClient = client;
  req.db = client.db("");
  return next();
};

const middleware = nextConnect();

middleware.use(database);

export default middleware;
