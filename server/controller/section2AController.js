import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Section2A } from "../models/section2ASchema.js";
import { User } from "../models/userSchema.js";

export const postSection2A = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    middleName,
    dob,
    gender,
    email,
    healthNumber,
    relation_parent,
    relation_guardian,
    relation_attorney,
    mailingAddress_sameAsSection1,
    mailingAddress_address1,
    mailingAddress_cityTown,
    mailingAddress_postalCode,
    residenceAddress_address1,
    residenceAddress_cityTown,
    residenceAddress_postalCode,
    residenceAddress_sameAsSection1,
  } = req.body;

  const patientId = req.user._id;
  const section2A = await Section2A.create({
    firstName: firstName,
    lastName: lastName,
    middleName: middleName,
    dob: dob,
    gender: gender,
    email: email,
    healthNumber: healthNumber,
    relation: {
      parent: relation_parent,
      guardian: relation_guardian,
      attorney: relation_attorney,
    },
    mailingAddress: {
      sameAsSection1: mailingAddress_sameAsSection1,
      address1: mailingAddress_address1,
      cityTown: mailingAddress_cityTown,
      postalCode: mailingAddress_postalCode,
    },
    residenceAddress: {
      address1: residenceAddress_address1,
      cityTown: residenceAddress_cityTown,
      postalCode: residenceAddress_postalCode,
      sameAsSection1: residenceAddress_sameAsSection1,
    },
    patientId,
  });
  console.log("2A");
  const s2Aid = section2A._id;
  await section2A.save();
  await User.findOneAndUpdate(
    { _id: patientId },
    { $set: { section2AId: s2Aid } },
    { new: true }
  );
  res.status(200).json({
    success: true,
    section2A,
    message: "Section2A creation is Successful!",
  });
});

export const getSection2A = catchAsyncErrors(async (req, res, next) => {
  const enrolled = await Section2A.find();
  res.status(200).json({
    success: true,
    enrolled,
  });
});

export const deleteSection2A = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let enrolled = await Section2A.findById(id);
  if (!enrolled) {
    return next(new ErrorHandler("Section2A Not Found!", 404));
  }
  await enrolled.deleteOne();
  res.status(200).json({
    success: true,
    message: "Section2A deleted!",
  });
});
