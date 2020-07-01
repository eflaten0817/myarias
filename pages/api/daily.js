import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import qs from "qs";
//import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = {};
    let query = qs.parse(req.query);
    // let vFilter = req.query.voiceFilter;

    if (query.voiceFilter) {
        doc = await req.db.collection("aria_data", function (err, collection) {
            // * I think this is what you want - Eric
            return collection.filter((item) => item.Voice === query.voiceFilter);
            // collection.find({ Voice: vFilter }).toArray(function (err, _doc) {});
        });
    } else {
        // * else: return all arias
        doc = await req.db.collection("aria_data");
    }

    res.json(doc);
});

export default (req, res) => handler.apply(req, res);
