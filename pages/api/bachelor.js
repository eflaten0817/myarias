import nextConnect from "next-connect";
import middleware from "../../middleware/bachelorData";
import qs from "qs";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = {};
    let query = qs.parse(req.query);
    const passwords = ['IckyOllie', 'lemondrop!', 'hashtagblessed', 'rideonkingjesus', '5dollarfootlong'];
    if (passwords.includes(query.passwordFilter)) {
        console.log('query: ', query);
        doc = await req.db.collection("bachelor_party_data").find(
            {
                Password: {$regex: query.passwordFilter},
            }).toArray();

    } else {
        // * else: return nothing if not matching password
        doc = { Name: "Wrong Password" }.toArray();
    }

    res.json(doc);
});

handler.post(async (req, res) => {
    let data = req.body;
    data = JSON.parse(data)
    console.log('data: ', data)
    let doc = await req.db.collection("bachelor_party_data").replaceOne({_id: data._id}, {$set:data}, {upsert: true})

    res.json({message: 'ok'});
})

export default (req, res) => handler.apply(req, res);
