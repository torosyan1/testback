const mongoose = require('mongoose');

const URI='mongodb+srv://usesrDB:usersDB@cluster0-p62uz.mongodb.net/<dbname>?retryWrites=true&w=majority'
const connectDB = async () => {
    const conn = await mongoose.connect(URI, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true 
    });

console.log(`MongoDB Connected: ${conn.connection.host}`);

};
module.exports = connectDB;