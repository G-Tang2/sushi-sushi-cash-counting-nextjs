import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

let connection: typeof mongoose;

const startDB = async () => {
  if (!connection)
    try {
      connection = await mongoose.connect(uri);
    } catch (error) {
      console.log(error);
    }
  return connection;
};

export default startDB;
