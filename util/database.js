const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb://admin:admin12!@ac-udj0w1r-shard-00-00.l42njfq.mongodb.net:27017,ac-udj0w1r-shard-00-01.l42njfq.mongodb.net:27017,ac-udj0w1r-shard-00-02.l42njfq.mongodb.net:27017/?replicaSet=atlas-10u33z-shard-0&ssl=true&authSource=admin"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
