import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
const connectString = `mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0-yw0sn.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(
    connectString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db("aria_data");
    //console.log("HELLO?")
    return next();
}

const middleware = nextConnect();

middleware
    .use(database)
    // * simple logger for GET requests
    .get((req, res, next) => {
        var url = req.url;

        console.log(`got request: ${url}?${JSON.stringify(req.query) !== "{}" ? JSON.stringify(req.query) : ""}`);

        return next();
    });

export default middleware;
