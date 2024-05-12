import mongoose from "mongoose";
import validator from "validator";

const section2ASchema = new mongoose.Schema({
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
  relation: {
    parent: {
      type: Boolean,
      default: false,
    },
    guardian: {
      type: Boolean,
      default: false,
    },
    attorney: {
      type: Boolean,
      default: false,
    },
  },
  mailingAddress: {
    sameAsSection1: {
      type: Boolean,
      default: false,
    },
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
    sameAsSection1: {
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
export const Section2A = mongoose.model("Section2A", section2ASchema);
