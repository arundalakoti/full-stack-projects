import mongoose from "mongoose";

//if sth doesnt exist than dont throw an error just return empty values
mongoose.set("strictQuery",false);

const connectToDb = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI || "");
        if(connection){
            console.log(`Connect to MongoDB: ${connection.host}`);
        }
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}
 
export default connectToDb;