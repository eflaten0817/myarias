import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
//import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = {}
    let vFilter = req.query.voiceFilter
    console.log(vFilter)
    if (vFilter){
        let allArias = await req.db.collection('aria_data', function (err, collection)
        {
        collection.find({"Voice":vFilter}).toArray(function (err, document){
            res.json(document)
            console.log(vFilter)
            console.log(document) //THIS SHOWS UP
        });
        });
    }
    else {
        const allArias = await req.db.collection('aria_data').find().toArray();
        console.log(allArias) //THIS SHOWS UP
        res.json(allArias)
    }
});

export default handler;