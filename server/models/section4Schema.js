import mongoose from "mongoose";
import fs from "fs";

const imageData = fs.readFileSync("sign.jpeg");
const base64Image = Buffer.from(imageData).toString("base64");
const dataUri = `data:image/jpeg;base64,${base64Image}`;

const section4Schema = new mongoose.Schema({
  notes: {
    type: String,
    default: "Dr Farrell, 123 Hillview St, Oshawa, R1X 3D4",
  },
  signature: {
    type: String,
    default: dataUri,
  },
  date: {
    type: Date,
    required: [true, "Date Is Required!"],
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
export const Section4 = mongoose.model("Section4", section4Schema);
