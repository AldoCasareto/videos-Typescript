import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL!, {});
    console.log('Connected to MongoDb', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
