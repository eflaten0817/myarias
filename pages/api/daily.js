import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
//import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = []
    let vFilter = req.query.voiceFilter
    
    if (vFilter){
        doc = await req.db.collection('aria_data', function (err, collection)
        {
        collection.find({"Voice":vFilter}).toArray(function (err, doc){    
        });
        });
    }
    else {
        //doc = await req.db.collection('aria_data').find().toArray();
        doc = await req.db.collection('aria_data').findOne();  
    }
    res.send(doc)
});

export default (req, res) => handler.apply(req, res)