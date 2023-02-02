const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

module.exports = () => {
    const databaseParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try{
        mongoose.connect(process.env.DB_URL) // process.env.DB_URL // not a string
        console.log("The backend has connected to the MongoDB database.")
    } catch(error){
        console.log(`${error} could not connect`)
    }
}

