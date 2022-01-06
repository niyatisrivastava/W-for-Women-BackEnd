import mongoose from 'mongoose';



const Connection = async () => {
    const URL = process.env.MONGODB_URI || `mongodb+srv://Niyati:KmeGkhvUN6v80vli@blogdb.pxbgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

//KmeGkhvUN6v80vli