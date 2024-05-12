import mongoose from "mongoose";

export const dbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "PATIENT_ENROLLMENT",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(`Error in connecting to MongoDB database ${err}`);
    });
};
