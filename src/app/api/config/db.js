import mongoose from "mongoose";
let isConnected = false;

export const connectToDb= async() => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("Mongo is already connected")
        return
    }
    try{
        await mongoose.connect(MONGODB_URI)

        isConnected=true;
        console.log("Connected to database")
    }
    catch(e){
        console.log(e)
    }
}