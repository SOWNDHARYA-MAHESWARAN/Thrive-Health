import mongoose from "mongoose";
import validator from "validator";

const enrollmentSchema = new mongoose.Schema({
  //Section1
  section1: {
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
  },
  // Section 2A
  section2A: {
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
  },
  // Section 2B
  section2B: {
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
  },
  // Section 3
  section3: {
    signingOnBehalfOf: [
      {
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
      },
    ],
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
      minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
      maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    },
    workPhone: {
      type: String,
      minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
      maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  // Section 4
  section4: {
    notes: {
      type: String,
      required: true,
      default: "Dr Farrell, 123 Hillview St, Oshawa, R1X 3D4",
    },
    signature: {
      type: String,
      required: true,
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
  },
});

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
