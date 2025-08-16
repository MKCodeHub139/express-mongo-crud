import mongoose from "mongoose";

// connect to mongodb
async function connectToMongoDB(url) {
return mongoose.connect(url)
}

export default connectToMongoDB;