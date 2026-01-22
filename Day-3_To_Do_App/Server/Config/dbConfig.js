const mongoose= require('mongoose');



const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.Mongo_DB)
        .then(() => {
            console.log("Connected to MongoDB");
        })  
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
}

module.exports = connectDB;