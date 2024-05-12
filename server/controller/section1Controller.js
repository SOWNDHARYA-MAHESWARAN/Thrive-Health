import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Section1 } from "../models/section1Schema.js";
import { User } from "../models/userSchema.js";

export const postSection1 = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    middleName,
    dob,
    gender,
    email,
    healthNumber,
    sendNotices_regularMail,
    sendNotices_email,
    mailingAddress_address1,
    mailingAddress_cityTown,
    mailingAddress_postalCode,
    residenceAddress_address1,
    residenceAddress_cityTown,
    residenceAddress_postalCode,
    residenceAddress_sameAsMailing,
  } = req.body;

  const patientId = req.user._id;
  const section1 = await Section1.create({
    firstName: firstName,
    lastName: lastName,
    middleName: middleName,
    dob: dob,
    gender: gender,
    email: email,
    healthNumber: healthNumber,
    sendNotices: {
      regularMail: sendNotices_regularMail,
      email: sendNotices_email,
    },
    mailingAddress: {
      address1: mailingAddress_address1,
      cityTown: mailingAddress_cityTown,
      postalCode: mailingAddress_postalCode,
    },
    residenceAddress: {
      address1: residenceAddress_address1,
      cityTown: residenceAddress_cityTown,
      postalCode: residenceAddress_postalCode,
      sameAsMailing: residenceAddress_sameAsMailing,
    },
    patientId,
  });
  console.log("1");
  const s1id = section1._id;
  await section1.save();
  await User.findOneAndUpdate(
    { _id: patientId },
    { $set: { section1Id: s1id } },
    { new: true }
  );
  res.status(200).json({
    success: true,
    section1,
    message: "Section1 creation is Successful!",
  });
});

export const getSection1 = catchAsyncErrors(async (req, res, next) => {
  const enrolled = await Section1.find();
  res.status(200).json({
    success: true,
    enrolled,
  });
});

export const deleteSection1 = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let enrolled = await Section1.findById(id);
  if (!enrolled) {
    return next(new ErrorHandler("Section1 Not Found!", 404));
  }
  await enrolled.deleteOne();
  res.status(200).json({
    success: true,
    message: "Section1 deleted!",
  });
});
