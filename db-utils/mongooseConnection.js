import mongoose from "mongoose";

const dbCluster = process.env.DB_CLUSTER || "";

const dbName = process.env.DB_NAME || "";

const dbUserName = process.env.DB_USER || "";

const dbPassword = process.env.DB_PASSWORD || "";

const cloudURI = `mongodb+srv://${dbUserName}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const mongooseConnect = async () => {
  try {
    await mongoose.connect(cloudURI);
    console.log("Mongoose connection established");
  } catch (error) {
    console.error(error);
  }
};

export default mongooseConnect;
