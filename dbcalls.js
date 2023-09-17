const {MongoClient} = require('mongodb');
/*  uri = "mongodb://127.0.0.1:27017/?authSource=admin&replicaSet=myRepl";
  client = new MongoClient(uri);*/

const uri = "mongodb://127.0.0.1:27017/test?retryWrites=true&w=majority",
      client = new MongoClient(uri);

async function main () {

  try {
    console.log('Going');
    await client.connect();
    let test = await client.db('newDB').collection('newCollec').insertOne({
      "name": "newdoc"
    });
    console.log(test);
    console.log("foi");
  } catch (error) {
    console.error(error);
    throw error;
    
  } finally {
    await client.close();
  }
}

async function find() {
  try {
    console.log('Going');
    await client.connect();
    let test = await client.db('newDB').collection('newCollec').find();
    console.log(test);
    console.log("foi");
  } catch (error) {
    console.error(error);
    throw error;
    
  } finally {
    await client.close();
  }
}

find();