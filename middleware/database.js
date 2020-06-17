import { MongoClient} from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://ef936963:Harvey54!@cluster0-yw0sn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('aria_data')
    //console.log("HELLO?")
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;