import mongoose from 'mongoose';
import settings from './settings';

(async ()=> {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Database is connected to: ', db.connection.name);
})();