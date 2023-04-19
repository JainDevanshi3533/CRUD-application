import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config('../.env');
const username= process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection =async () =>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.fyj4j2t.mongodb.net/crud-application?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true });
        console.log('DataBAse connected Successfully');
    }catch(error){
        console.log('Error while connecting the database', error);
    }
}

export default Connection;