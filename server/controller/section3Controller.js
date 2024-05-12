import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Section3 } from "../models/section3Schema.js";
import { User } from "../models/userSchema.js";

export const postSection3 = catchAsyncErrors(async (req, res, next) => {
  const {
    signingOnBehalfOf_myself,
    signingOnBehalfOf_children,
    signingOnBehalfOf_dependent,
    firstName,
    lastName,
    signature,
    date,
    homePhone,
    workPhone,
  } = req.body;

  const patientId = req.user._id;
  const section3 = await Section3.create({
    myself: signingOnBehalfOf_myself,
    children: signingOnBehalfOf_children,
    dependent: signingOnBehalfOf_dependent,
    firstName: firstName,
    lastName: lastName,
    signature: signature,
    date: date,
    homePhone: homePhone,
    workPhone: workPhone,
    patientId,
  });
  const s3id = section3._id;
  await section3.save();
  await User.findOneAndUpdate(
    { _id: patientId },
    { $set: { section3Id: s3id } },
    { new: true }
  );
  console.log("3");
  res.status(200).json({
    success: true,
    section3,
    message: "Section3 creation is Successful!",
  });
});
export const getSection3 = catchAsyncErrors(async (req, res, next) => {
  const enrolled = await Section3.find();
  res.status(200).json({
    success: true,
    enrolled,
  });
});

export const deleteSection3 = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let enrolled = await Section3.findById(id);
  if (!enrolled) {
    return next(new ErrorHandler("Enrollment Not Found!", 404));
  }
  await enrolled.deleteOne();
  res.status(200).json({
    success: true,
    message: "Section3 deleted!",
  });
});
