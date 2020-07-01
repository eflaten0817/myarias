import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import qs from "qs";
//import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = {};
    let query = qs.parse(req.query);
    /*console.log(query.voiceFilter);
    console.log(query.styleFilter);
    console.log(query.composerFilter);
    console.log(query.fachFilter);
    console.log(query.languageFilter);
    */
   
    if (query.voiceFilter != undefined) {
        doc = await req.db.collection("aria_data").find(
            {
                Voice: {$regex: query.voiceFilter},
                Style: {$regex: query.styleFilter},
                Composer: {$regex: query.composerFilter},
                Fach: {$regex: query.fachFilter},
                Language: {$regex: query.languageFilter}

            }).toArray();
        // * for some reason, if I don't do it this ^ way, I get the "unexpected token" error
        // * it might be a specific MongoDb Atlas syntax thing, I had similar issues using mongoDB with python

        //doc = await req.db.collection("aria_data", function (err, collection) {
            // * I think this is what you want - Eric
            //return collection.filter((item) => item.Voice === query.voiceFilter);
            // collection.find({ Voice: vFilter }).toArray(function (err, _doc) {});
        //});

    } else {
        // * else: return all arias
        //doc = await req.db.collection("aria_data");

        // * with the above ^ I was getting "Unexpected token I in JSON at position 0" errors
        doc = await req.db.collection("aria_data").find().toArray();
    }

    res.json(doc);
});

export default (req, res) => handler.apply(req, res);
