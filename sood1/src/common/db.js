import mongoose from 'mongoose';

const db  = mongoose.connect('mongodb://127.0.0.1:27017/sood_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true

})


export default db;