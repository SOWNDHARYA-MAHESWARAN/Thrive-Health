import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contain exactly 11 digits!"],
    maxLength: [11, "Phone number must contain exactly 11 digits!"],
  },
  nid: {
    type: String,
    required: true,
    minLength: [14, "NID must contain exactly 14 digits!"],
    maxLength: [14, "NID must contain exactly 14 digits!"],
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
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must contain atleast 8 characters!"],
    select: false,
  },
  role: {
    type: String,
    default: "Patient",
    enum: ["Admin", "Patient", "Doctor"],
  },
  doctorDepartment: {
    type: String,
  },
  section1Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section1",
  },
  section2AId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section2A",
  },
  section2BId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section2B",
  },
  section3Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section3",
  },
  section4Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section4",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
