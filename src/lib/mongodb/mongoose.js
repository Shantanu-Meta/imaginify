const mongoose = require('mongoose')
const connection = {}; 

const connectWithMongo = async () =>{
    const mongodbURI = process.env.MONGODB_URI; 
    if(connection.isConnected){
        console.log("Use existing connection")
        return ; 
    }
    console.log("Ready to connect")
    const db = await mongoose.connect(mongodbURI); 
    connection.isConnected = db.connections[0].readyState; 
}

export default connectWithMongo;

