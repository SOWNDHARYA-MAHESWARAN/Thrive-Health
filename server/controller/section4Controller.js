import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Section4 } from "../models/section4Schema.js";
import { User } from "../models/userSchema.js";

export const postSection4 = catchAsyncErrors(async (req, res, next) => {
  const { notes, signature, date } = req.body;

  const patientId = req.user._id;
  const section4 = await Section4.create({
    notes: notes,
    signature: signature,
    date: date,
    patientId,
  });
  const s4id = section4._id;
  await section4.save();
  await User.findOneAndUpdate(
    { _id: patientId },
    { $set: { section4Id: s4id } },
    { new: true }
  );
  console.log("4");
  res.status(200).json({
    success: true,
    section4,
    message: "Section4 creation is Successful!",
  });
});
export const getSection4 = catchAsyncErrors(async (req, res, next) => {
  const enrolled = await Section4.find();
  res.status(200).json({
    success: true,
    enrolled,
  });
});

export const deleteSection4 = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let enrolled = await Section4.findById(id);
  if (!enrolled) {
    return next(new ErrorHandler("Enrollment Not Found!", 404));
  }
  await enrolled.deleteOne();
  res.status(200).json({
    success: true,
    message: "Section4 deleted!",
  });
});
