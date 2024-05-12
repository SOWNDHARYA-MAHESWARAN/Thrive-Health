import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Section2B } from "../models/section2BSchema.js";
import { User } from "../models/userSchema.js";

export const postSection2B = catchAsyncErrors(async (req, res, next) => {
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
  const section2B = await Section2B.create({
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
  console.log("2B");
  const s2Bid = section2B._id;
  await section2B.save();
  await User.findOneAndUpdate(
    { _id: patientId },
    { $set: { section2BId: s2Bid } },
    { new: true }
  );
  res.status(200).json({
    success: true,
    section2B,
    message: "Section2B creation is Successful!",
  });
});
export const getSection2B = catchAsyncErrors(async (req, res, next) => {
  const enrolled = await Section2B.find();
  res.status(200).json({
    success: true,
    enrolled,
  });
});

export const deleteSection2B = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let enrolled = await Section2B.findById(id);
  if (!enrolled) {
    return next(new ErrorHandler("Enrollment Not Found!", 404));
  }
  await enrolled.deleteOne();
  res.status(200).json({
    success: true,
    message: "Section2B deleted!",
  });
});
