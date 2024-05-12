import mongoose from "mongoose";

const section2BSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  middleName: {
    type: String,
    default: "",
  },
  dob: {
    type: Date,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  healthNumber: {
    type: String,
    default: "",
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

export const Section2B = mongoose.model("Section2B", section2BSchema);
