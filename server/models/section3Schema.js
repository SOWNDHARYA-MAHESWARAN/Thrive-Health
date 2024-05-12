import mongoose from "mongoose";

const section3Schema = new mongoose.Schema({
  myself: {
    type: Boolean,
    default: false,
  },
  children: {
    type: Boolean,
    default: false,
  },
  dependent: {
    type: Boolean,
    default: false,
  },

  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain atleast 3 characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain atleast 3 characters!"],
  },
  signature: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: [true, "Date Is Required!"],
  },
  homePhone: {
    type: String,
    required: [true, "Phone number Is Required!"],
    minLength: [11, "Home Phone Number Must Contain Exact 11 Digits!"],
    maxLength: [11, "Home Phone Number Must Contain Exact 11 Digits!"],
  },
  workPhone: {
    type: String,
    minLength: [11, "Work Phone Number Must Contain Exact 11 Digits!"],
    maxLength: [11, "Work Phone Number Must Contain Exact 11 Digits!"],
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
export const Section3 = mongoose.model("Section3", section3Schema);
