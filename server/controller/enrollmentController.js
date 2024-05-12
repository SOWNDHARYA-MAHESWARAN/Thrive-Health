import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Enrollment } from "../models/enrollmentSchema.js";
import { User } from "../models/userSchema.js";

export const postEnrollment = catchAsyncErrors(async (req, res, next) => {
  const {
    //Section1
    section1_firstName,
    section1_lastName,
    section1_middleName,
    section1_dob,
    section1_gender,
    section1_email,
    section1_healthNumber,
    section1_sendNotices_regularMail,
    section1_sendNotices_email,
    section1_mailingAddress_address1,
    section1_mailingAddress_cityTown,
    section1_mailingAddress_postalCode,
    section1_residenceAddress_address1,
    section1_residenceAddress_cityTown,
    section1_residenceAddress_postalCode,
    section1_residenceAddress_sameAsMailing,
    // Section 2A

    section2A_firstName,
    section2A_lastName,
    section2A_middleName,
    section2A_dob,
    section2A_gender,
    section2A_email,
    section2A_healthNumber,
    section2A_relation_parent,
    section2A_relation_guardian,
    section2A_relation_attorney,
    section2A_mailingAddress_sameAsSection1,
    section2A_mailingAddress_address1,
    section2A_mailingAddress_cityTown,
    section2A_mailingAddress_postalCode,
    section2A_residenceAddress_address1,
    section2A_residenceAddress_cityTown,
    section2A_residenceAddress_postalCode,
    section2A_residenceAddress_sameAsSection1,

    // Section 2B
    section2B_firstName,
    section2B_lastName,
    section2B_middleName,
    section2B_dob,
    section2B_gender,
    section2B_email,
    section2B_healthNumber,
    section2B_relation_parent,
    section2B_relation_guardian,
    section2B_relation_attorney,
    section2B_mailingAddress_sameAsSection1,
    section2B_mailingAddress_address1,
    section2B_mailingAddress_cityTown,
    section2B_mailingAddress_postalCode,
    section2B_residenceAddress_address1,
    section2B_residenceAddress_cityTown,
    section2B_residenceAddress_postalCode,
    section2B_residenceAddress_sameAsSection1,
    // Section 3

    section3_signingOnBehalfOf_myself,
    section3_signingOnBehalfOf_children,
    section3_signingOnBehalfOf_dependent,
    section3_firstName,
    section3_lastName,
    section3_signature,
    section3_date,
    section3_homePhone,
    section3_workPhone,

    // Section 4

    section4_notes,
    section4_signature,
    section4_date,
  } = req.body;

  const patientId = req.user._id;
  const enrollment = await Enrollment.create({
    //Section1
    section1: {
      firstName: section1_firstName,
      lastName: section1_lastName,
      middleName: section1_middleName,
      dob: section1_dob,
      gender: section1_gender,
      email: section1_email,
      healthNumber: section1_healthNumber,
      sendNotices: {
        regularMail: section1_sendNotices_regularMail,
        email: section1_sendNotices_email,
      },
      mailingAddress: {
        address1: section1_mailingAddress_address1,
        cityTown: section1_mailingAddress_cityTown,
        postalCode: section1_mailingAddress_postalCode,
      },
      residenceAddress: {
        address1: section1_residenceAddress_address1,
        cityTown: section1_residenceAddress_cityTown,
        postalCode: section1_residenceAddress_postalCode,
        sameAsMailing: section1_residenceAddress_sameAsMailing,
      },
      patientId,
    },
    // Section 2A
    section2A: {
      firstName: section2A_firstName,
      lastName: section2A_lastName,
      middleName: section2A_middleName,
      dob: section2A_dob,
      gender: section2A_gender,
      email: section2A_email,
      healthNumber: section2A_healthNumber,
      relation: {
        parent: section2A_relation_parent,
        guardian: section2A_relation_guardian,
        attorney: section2A_relation_attorney,
      },
      mailingAddress: {
        sameAsSection1: section2A_mailingAddress_sameAsSection1,
        address1: section2A_mailingAddress_address1,
        cityTown: section2A_mailingAddress_cityTown,
        postalCode: section2A_mailingAddress_postalCode,
      },
      residenceAddress: {
        address1: section2A_residenceAddress_address1,
        cityTown: section2A_residenceAddress_cityTown,
        postalCode: section2A_residenceAddress_postalCode,
        sameAsSection1: section2A_residenceAddress_sameAsSection1,
      },
      patientId,
    },
    // Section 2B
    section2B: {
      firstName: section2B_firstName,
      lastName: section2B_lastName,
      middleName: section2B_middleName,
      dob: section2B_dob,
      gender: section2B_gender,
      email: section2B_email,
      healthNumber: section2B_healthNumber,
      relation: {
        parent: section2B_relation_parent,
        guardian: section2B_relation_guardian,
        attorney: section2B_relation_attorney,
      },
      mailingAddress: {
        sameAsSection1: section2B_mailingAddress_sameAsSection1,
        address1: section2B_mailingAddress_address1,
        cityTown: section2B_mailingAddress_cityTown,
        postalCode: section2B_mailingAddress_postalCode,
      },
      residenceAddress: {
        address1: section2B_residenceAddress_address1,
        cityTown: section2B_residenceAddress_cityTown,
        postalCode: section2B_residenceAddress_postalCode,
        sameAsSection1: section2B_residenceAddress_sameAsSection1,
      },
      patientId,
    },
    // Section 3
    section3: {
      signingOnBehalfOf: [
        {
          myself: section3_signingOnBehalfOf_myself,
          children: section3_signingOnBehalfOf_children,
          dependent: section3_signingOnBehalfOf_dependent,
        },
      ],
      firstName: section3_firstName,
      lastName: section3_lastName,
      signature: section3_signature,
      date: section3_date,
      homePhone: section3_homePhone,
      workPhone: section3_workPhone,
      patientId,
    },
    // Section 4

    section4: {
      notes: section4_notes,
      signature: section4_signature,
      date: section4_date,
      patientId,
    },
  });
  res.status(200).json({
    success: true,
    enrollment,
    message: "Patient Enrolled Successfully!",
  });
});

export const getAllEnrolledPatients = catchAsyncErrors(
  async (req, res, next) => {
    const enrolled = await Enrollment.find();
    res.status(200).json({
      success: true,
      enrolled,
    });
  }
);

export const deleteEnrollments = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let enrolled = await Enrollment.findById(id);
  if (!enrolled) {
    return next(new ErrorHandler("Enrollment Not Found!", 404));
  }
  await enrolled.deleteOne();
  res.status(200).json({
    success: true,
    message: "Patient enrollment deleted!",
  });
});
