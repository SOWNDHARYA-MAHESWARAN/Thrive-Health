import express from "express";
import { PDFDocument } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";
import { Section1 } from "./models/section1Schema.js";
import { Section2A } from "./models/section2ASchema.js";
import { Section2B } from "./models/section2BSchema.js";
import { Section3 } from "./models/section3Schema.js";
import { Section4 } from "./models/section4Schema.js";
import { User } from "./models/userSchema.js";

const router = express.Router();

router.get("/:patientId", async (req, res) => {
  try {
    console.log("pdf");
    const patientID = req.params.patientId;
    const patient = await User.findById(patientID);
    const input = "Patient Consent Form.pdf";
    const output = "output.pdf";
    const pdfDoc = await PDFDocument.load(await readFile(input));

    const fieldNames = pdfDoc
      .getForm()
      .getFields()
      .map((f) => f.getName());
    console.log({ fieldNames });

    const form = pdfDoc.getForm();
    pdfDoc.removePage(1);

    //section1
    const s1 = await Section1.findOne({ _id: patient.section1Id });
    if (s1) {
      form
        .getTextField("Last name of adult submitting form")
        .setText(s1.lastName);
      form
        .getTextField("First Name of adult submitting form")
        .setText(s1.firstName);
      form.getTextField("Second Name of adult patient").setText(s1.middleName);

      const healthNo = s1.healthNumber.slice(0, 10);
      const code = s1.healthNumber.slice(-2);
      form.getTextField("Health Number").setText(healthNo);
      form.getTextField("Code").setText(code);

      const year = s1.dob.getFullYear();
      const month = String(s1.dob.getMonth() + 1).padStart(2, "0");
      const day = String(s1.dob.getDate()).padStart(2, "0");
      const dob = `${year}${month}${day}`;
      form.getTextField("Date of Birth 1").setText(dob);

      const gender = form.getRadioGroup("Sex");
      gender.select(s1.gender === "Male" ? "M" : "F");

      const notices = form.getRadioGroup("Notices");
      notices.select(s1.sendNotices_regularMail ? "regularMail" : "email");

      form
        .getTextField("Email Address of adult submitting form")
        .setText(s1.email);
      const maddress = s1.mailingAddress.address1;
      const [mapartment, mstreet] = maddress
        .split(",")
        .map((part) => part.trim());
      form.getTextField("Apartment No. (Mailing address)").setText(mapartment);
      form.getTextField("Street (Mailing address)").setText(mstreet);
      form
        .getTextField("CityTown (Mailing address)")
        .setText(s1.mailingAddress.cityTown);
      form
        .getTextField("Postal Code (Mailing address)")
        .setText(s1.mailingAddress.postalCode);

      const sameAsMailing = form.getCheckBox("Different residential address");
      if (s1.residenceAddress.sameAsMailing) {
        sameAsMailing.check();
      } else {
        sameAsMailing.uncheck();
      }
      const raddress = s1.residenceAddress.address1;
      const [rapartment, rstreet] = raddress
        .split(",")
        .map((part) => part.trim());
      form.getTextField("Apartment (Residential address)").setText(rapartment);
      form.getTextField("Street (Residential address)").setText(rstreet);
      form
        .getTextField("CityTown (Residential address)")
        .setText(s1.residenceAddress.cityTown);
      form
        .getTextField("Postal code (Residential address)")
        .setText(s1.residenceAddress.postalCode);
    } else {
      console.log("No section1 data found for the specified patientId.");
    }

    //section2A
    const s2A = await Section2A.findOne({ _id: patient.section2AId });

    if (s2A) {
      form.getTextField("Last Name A").setText(s2A.lastName);
      form.getTextField("First Name_A").setText(s2A.firstName);
      form.getTextField("Second Name_A").setText(s2A.middleName);

      const healthNo = s2A.healthNumber.slice(0, 10);
      const code = s2A.healthNumber.slice(-2);
      form.getTextField("Health Number_A").setText(healthNo);
      form.getTextField("Version code_A").setText(code);
      if (s2A.dob) {
        const year = s2A.dob.getFullYear();
        const month = String(s2A.dob.getMonth() + 1).padStart(2, "0");
        const day = String(s2A.dob.getDate()).padStart(2, "0");
        const dob = `${year}${month}${day}`;
        form.getTextField("Date of Birth yyyymmdd_2").setText(dob);
      }
      const gender = form.getRadioGroup("Sex_A");
      gender.select(s2A.gender);

      const relationshipA = form.getRadioGroup("Relationship A");
      if (s2A.relation.parent) {
        relationshipA.select("Parent");
      } else if (s2A.relation.guardian) {
        relationshipA.select("legal guardian");
      } else if (s2A.relation.attorney) {
        relationshipA.select("attorney for personal care");
      }

      const sameAsSection1A = form.getCheckBox("Same Mailing_A");
      if (s2A.mailingAddress.sameAsSection1) {
        sameAsSection1A.check();
      } else {
        sameAsSection1A.uncheck();
      }
      const maddress = s2A.mailingAddress.address1;
      const [mapartment, mstreet] = maddress
        .split(",")
        .map((part) => part.trim());
      form.getTextField("Apartment Mailing A").setText(mapartment);
      form.getTextField("Street Mailing A").setText(mstreet);
      form
        .getTextField("CityTown_Mailing_A")
        .setText(s2A.mailingAddress.cityTown);
      form.getTextField("Postal Code_A").setText(s2A.mailingAddress.postalCode);

      const sameAsMailing1A = form.getCheckBox("Same Residence_A");
      if (s2A.residenceAddress.sameAsSection1) {
        sameAsMailing1A.check();
      } else {
        sameAsMailing1A.uncheck();
      }
      const raddress = s2A.residenceAddress.address1;
      const [rapartment, rstreet] = raddress
        .split(",")
        .map((part) => part.trim());
      form.getTextField("Apartment_Residence_A").setText(rapartment);
      form.getTextField("Street_Residence_A").setText(rstreet);
      form
        .getTextField("CityTown_Residence_A")
        .setText(s2A.residenceAddress.cityTown);
      form
        .getTextField("Postal Code_Residence_A")
        .setText(s2A.residenceAddress.postalCode);
    } else {
      console.log("No section2A data found for the specified patientId.");
    }
    //section2B
    const s2B = await Section2B.findOne({ _id: patient.section2BId });

    if (s2B) {
      form.getTextField("Last Name B").setText(s2B.lastName);
      form.getTextField("First Name_B").setText(s2B.firstName);
      form.getTextField("Second Name_B").setText(s2B.middleName);

      const healthNo = s2B.healthNumber.slice(0, 10);
      const code = s2B.healthNumber.slice(-2);
      form.getTextField("Health Number_B").setText(healthNo);
      form.getTextField("Version code_B").setText(code);
      if (s2B.dob) {
        const year = s2B.dob.getFullYear();
        const month = String(s2B.dob.getMonth() + 1).padStart(2, "0");
        const day = String(s2B.dob.getDate()).padStart(2, "0");
        const dob = `${year}${month}${day}`;
        form.getTextField("Date_of_Birth_B").setText(dob);
      }
      if (s2B.gender) {
        const gender = form.getRadioGroup("Sex_B");
        gender.select(s2B.gender);
      }
      const relationshipA = form.getRadioGroup("Relationship B");
      if (s2B.relation.parent) {
        relationshipA.select("Parent");
      } else if (s2B.relation.guardian) {
        relationshipA.select("legal guardian");
      } else if (s2B.relation.attorney) {
        relationshipA.select("attorney for personal care");
      }

      const sameAsSection1A = form.getCheckBox("Same Mailing B");
      if (s2B.mailingAddress.sameAsSection1) {
        sameAsSection1A.check();
      } else {
        sameAsSection1A.uncheck();
      }
      if (s2B.mailingAddress.address1) {
        const maddress = s2B.mailingAddress.address1;
        const [mapartment, mstreet] = maddress
          .split(",")
          .map((part) => part.trim());
        form.getTextField("Apartment Mailing B").setText(mapartment);
        form.getTextField("Street Mailing B").setText(mstreet);
        form
          .getTextField("CityTown_Mailing_B")
          .setText(s2B.mailingAddress.cityTown);
        form
          .getTextField("Postal_Code_Mailing_B")
          .setText(s2B.mailingAddress.postalCode);
      }
      const sameAsMailing1A = form.getCheckBox("Same Residence B");
      if (s2B.residenceAddress.sameAsSection1) {
        sameAsMailing1A.check();
      } else {
        sameAsMailing1A.uncheck();
      }
      if (s2B.residenceAddress.address1) {
        const raddress = s2B.residenceAddress.address1;
        const [rapartment, rstreet] = raddress
          .split(",")
          .map((part) => part.trim());
        form.getTextField("Apartment_Residence_B").setText(rapartment);
        form.getTextField("Street_Residence_B").setText(rstreet);
        form
          .getTextField("CityTown_Residence_B")
          .setText(s2B.residenceAddress.cityTown);
        form
          .getTextField("Postal Code_Residence_B")
          .setText(s2B.residenceAddress.postalCode);
      }
    } else {
      console.log("No section2B data found for the specified patientId.");
    }

    //section3
    const s3 = await Section3.findOne({ _id: patient.section3Id });

    if (s3) {
      const myself = form.getCheckBox("myself");
      if (s3.myself) {
        myself.check();
      } else {
        myself.uncheck();
      }
      const children = form.getCheckBox("children");
      if (s3.children) {
        children.check();
      } else {
        children.uncheck();
      }
      const dependent = form.getCheckBox("dependent adults");
      if (s3.dependent) {
        dependent.check();
      } else {
        dependent.uncheck();
      }

      const firstName = s3.firstName ? s3.firstName + " " : "";
      const middleName = s3.middleName ? s3.middleName + " " : "";
      const lastName = s3.lastName ? s3.lastName + " " : "";
      form.getTextField("Full name").setText(firstName + middleName + lastName);

      //form.getTextField("Signature1").setText(s3.signature);

      const year = s3.date.getFullYear();
      const month = String(s3.date.getMonth() + 1).padStart(2, "0");
      const day = String(s3.date.getDate()).padStart(2, "0");
      const date = `${year}/${month}/${day}`;
      form.getTextField("Date signed").setText(date);

      form.getTextField("Home or Mobile Telephone No").setText(s3.homePhone);
      form.getTextField("Work Telephone No").setText(s3.workPhone);
    } else {
      console.log("No section3 data found for the specified patientId.");
    }

    //section4
    const s4 = await Section4.findOne({ _id: patient.section4Id });

    if (s4) {
      form.getTextField("Family Doctor Information").setText(s4.notes);
    } else {
      console.log("No section4 data found for the specified patientId.");
    }
    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log("PDF Created!");
    res.json({ message: "PDF updated" });
  } catch (err) {
    console.log(err);
  }
});
export default router;
