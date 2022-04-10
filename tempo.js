
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://colval2022:<colval2022@cluster0.5beod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const connectionString = 
  "mongodb+srv://colval2022:<colval2022@cluster0.5beod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
