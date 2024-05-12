import mongoose from "mongoose";
import validator from "validator";

const section1Schema = new mongoose.Schema({
  //Section1
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
  middleName: {
    type: String,
    default: "",
  },
  dob: {
    type: Date,
    required: [true, "DOB is required"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  healthNumber: {
    type: String,
    required: true,
    minLength: [12, "Health Number must contain exactly 12 characters!"],
    maxLength: [12, "Health Number must contain exactly 12 characters!"],
  },
  sendNotices: {
    regularMail: {
      type: Boolean,
      default: false,
    },
    email: {
      type: Boolean,
      default: false,
    },
  },
  mailingAddress: {
    address1: {
      type: String,
    },
    cityTown: {
      type: String,
    },
    postalCode: {
      type: String,
      minLength: [6, "Postal code must contain exactly 6 characters!"],
      maxLength: [6, "Postal code must contain exactly 6 characters!"],
    },
  },
  residenceAddress: {
    address1: {
      type: String,
      default: "",
    },
    cityTown: {
      type: String,
      default: "",
    },
    postalCode: {
      type: String,
      default: "",
    },
    sameAsMailing: {
      type: Boolean,
      default: false,
    },
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Section1 = mongoose.model("Section1", section1Schema);
