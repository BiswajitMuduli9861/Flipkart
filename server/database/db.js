import mongoose from 'mongoose';

const Connection = async(URL) =>{
    
    try {
        console.log("HII")
        await mongoose.connect(URL);
        console.log(URL)
       console.log("hii2");
       console.log("Database connected Successfully");
    } catch (error) {
        console.log(`Error while connecting with the database`, error);
    }
}

export default Connection;