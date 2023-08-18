import { MongoClient, ServerApiVersion } from "mongodb";
// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://Dannkol:diminombre12A@pruebas.ncnxgtj.mongodb.net/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
let client = null

async function run() {
    if (client){
        return client;
    }
    try {
        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        }
        );
        // Connect the client to the server (optional starting in v4.7)
        return await client.connect();
    } catch {
        console.error(error);
    }
}

export default run;