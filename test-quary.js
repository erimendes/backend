const { MongoClient } = require("mongodb");
require("dotenv").config();

const testQuery = async () => {
  const uri = process.env.DB_URL;

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Database connected..");

    const database = client.db("ecommerce");
    const collection = database.collection("admins");

    const query = { email: "eri@gmail.com" }; // Substitua pelo email desejado

    const admin = await collection.findOne(query);
    console.log("Admin found:", admin);
  } catch (error) {
    console.error("Query error:", error.message);
  } finally {
    await client.close();
  }
};

testQuery();
