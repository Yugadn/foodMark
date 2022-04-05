const { MongoClient } = require('mongodb');

"mongodb+srv://yugadn:memang21@cluster0.i2bhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

let db;

async function connectMongo() {
  try {
    const connection = await client.connect();
    db = connection.db("foodMark");
  } catch (err) {
    throw err;
  }
}

function getDatabase() {
  return db;
}

module.exports = { connectMongo, getDatabase };
