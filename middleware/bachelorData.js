import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
//for production
//const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0-yw0sn.mongodb.net/test?retryWrites=true&w=majority`;

//for local dev 
const uri = 'mongodb+srv://ef936963:Harvey54!@cluster0-yw0sn.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db("vercel_data");
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
    })

    // .post((req, res, next) => {
    //     var url = req.url;

    //     console.log(`got request: ${url}?${JSON.stringify(req) !== "{}" ? JSON.stringify(req) : ""}`);

    //     return next();
    // });

export default middleware;