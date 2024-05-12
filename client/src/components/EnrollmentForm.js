import React, { createContext, useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export const Con = createContext({ s1FirstName: "" });
const EnrollmentForm = () => {
  const [s1Notice, sets1Notice] = useState(false);
  const [section, setSection] = useState({
    s1LastName: "",
    s1FirstName: "",
    s1MiddleName: "",
    s1HealthNumber: "",
    s1Gender: "",
    s1Dob: "",
    s1Notice: "",
    s1Email: "",
    s1Maddress1: "",
    s1Mcity: "",
    s1Mpcode: "",
    s1Sma: false,
    s1Raddress1: "",
    s1Rcity: "",
    s1Rpcode: "",

    s2AMaddress1: "",
    s2AMcity: "",
    s2AMpcode: "",
    s2ASma: false,
    s2ARaddress1: "",
    s2ARcity: "",
    s2ARpcode: "",
    s2ASs1: false,

    s2BMaddress1: "",
    s2BMcity: "",
    s2BMpcode: "",
    s2BSma: false,
    s2BRaddress1: "",
    s2BRcity: "",
    s2BRpcode: "",
    s2BSs1: false,
  });

  const [s2Arelation, sets2Arelation] = useState(false);
  const [s2ASection1, sets2ASection1] = useState({
    s2AFirstName: "",
    s2ALastName: "",
    s2AMiddleName: "",
    s2ADob: "",
    s2AGender: "",
    s2AEmail: "",
    s2AHealthNumber: "",
  });

  const [s2Brelation, sets2Brelation] = useState(false);
  const [s2BSection1, sets2BSection1] = useState({
    s2BFirstName: "",
    s2BLastName: "",
    s2BMiddleName: "",
    s2BDob: "",
    s2BGender: "",
    s2BEmail: "",
    s2BHealthNumber: "",
  });

  const [s3FirstName, sets3FirstName] = useState("");
  const [s3LastName, sets3LastName] = useState("");
  const [s3Signature, sets3Signature] = useState("");
  const [s3Date, sets3Date] = useState("");
  const [s3HomePhoneNo, sets3HomePhoneNo] = useState("");
  const [s3WorkPhoneNo, sets3WorkPhoneNo] = useState("");
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  const [s4Notes, sets4Notes] = useState("");
  const [s4Signature, sets4Signature] = useState("");
  const [s4Date, sets4Date] = useState("");

  const [step, setStep] = useState(1);

  const navigateTo = useNavigate();
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleEnroll = async (e, req, res) => {
    e.preventDefault();

    try {
      const { section1 } = await axios.post(
        "http://localhost:4000/api/v1/enrollment/section1/postSection1",
        {
          firstName: section.s1FirstName,
          lastName: section.s1LastName,
          middleName: section.s1MiddleName,
          dob: section.s1Dob,
          gender: section.s1Gender,
          email: section.s1Email,
          healthNumber: section.s1HealthNumber,
          sendNotices_regularMail: s1Notice === "regular_mail",
          sendNotices_email: s1Notice === "email",
          mailingAddress_address1: section.s1Maddress1,
          mailingAddress_cityTown: section.s1Mcity,
          mailingAddress_postalCode: section.s1Mpcode,
          residenceAddress_address1: section.s1Raddress1,
          residenceAddress_cityTown: section.s1Rcity,
          residenceAddress_postalCode: section.s1Rpcode,
          residenceAddress_sameAsMailing: section.s1Sma,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(section1.message);
      sets1Notice(false);
    } catch (error) {
      toast.error(error.response);
    }
    //section2A
    try {
      const { section2A } = await axios.post(
        "http://localhost:4000/api/v1/enrollment/section2A/postSection2A",
        {
          firstName: s2ASection1.s2AFirstName,
          lastName: s2ASection1.s2ALastName,
          middleName: s2ASection1.s2AMiddleName,
          dob: s2ASection1.s2ADob,
          gender: s2ASection1.s2AGender,
          email: s2ASection1.s2AEmail,
          healthNumber: s2ASection1.s2AHealthNumber,
          relation_parent: s2Arelation === "parent",
          relation_guardian: s2Arelation === "guardian",
          relation_attorney: s2Arelation === "attorney",
          mailingAddress_sameAsSection1: section.s2ASs1,
          mailingAddress_address1: section.s2AMaddress1,
          mailingAddress_cityTown: section.s2AMcity,
          mailingAddress_postalCode: section.s2AMpcode,
          residenceAddress_address1: section.s2ARaddress1,
          residenceAddress_cityTown: section.s2ARcity,
          residenceAddress_postalCode: section.s2ARpcode,
          residenceAddress_sameAsSection1: section.s2ASma,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(section2A.message);
      sets2Arelation(false);
    } catch (error) {
      toast.error(error.response);
    }
    //section2B
    try {
      const { section2B } = await axios.post(
        "http://localhost:4000/api/v1/enrollment/section2B/postSection2B",
        {
          firstName: s2BSection1.s2BFirstName,
          lastName: s2BSection1.s2BLastName,
          middleName: s2BSection1.s2BMiddleName,
          dob: s2BSection1.s2BDob,
          gender: s2BSection1.s2BGender,
          email: s2BSection1.s2BEmail,
          healthNumber: s2BSection1.s2BHealthNumber,
          relation_parent: s2Brelation === "parent",
          relation_guardian: s2Brelation === "guardian",
          relation_attorney: s2Brelation === "attorney",
          mailingAddress_sameAsSection1: section.s2BSs1,
          mailingAddress_address1: section.s2BMaddress1,
          mailingAddress_cityTown: section.s2BMcity,
          mailingAddress_postalCode: section.s2BMpcode,
          residenceAddress_address1: section.s2BRaddress1,
          residenceAddress_cityTown: section.s2BRcity,
          residenceAddress_postalCode: section.s2BRpcode,
          residenceAddress_sameAsSection1: section.s2BSma,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(section2B.message);
      sets2Brelation(false);
    } catch (error) {
      toast.error(error.response);
    }
    //section3
    try {
      const { section3 } = await axios.post(
        "http://localhost:4000/api/v1/enrollment/section3/postSection3",
        {
          signingOnBehalfOf_myself: checkedOne,
          signingOnBehalfOf_children: checkedTwo,
          signingOnBehalfOf_dependent: checkedThree,
          firstName: s3FirstName,
          lastName: s3LastName,
          signature: s3Signature,
          date: s3Date,
          homePhone: s3HomePhoneNo,
          workPhone: s3WorkPhoneNo,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(section3.message);
      setCheckedOne(false);
      setCheckedTwo(false);
      setCheckedThree(false);
      sets3FirstName("");
      sets3LastName("");
      sets3Signature("");
      sets3Date("");
      sets3HomePhoneNo("");
      sets3WorkPhoneNo("");
    } catch (error) {
      toast.error(error.response);
    }

    //section4
    try {
      const { section4 } = await axios.post(
        "http://localhost:4000/api/v1/enrollment/section4/postSection4",
        {
          notes: s4Notes,
          signature: s4Signature,
          date: s4Date,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(section4.message);
      sets4Notes("");
      sets4Signature("");
      sets4Date("");
    } catch (error) {
      toast.error(error.response);
    }

    //pdf
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/patient/me",
        {
          withCredentials: true,
        }
      );
      const patientId = response.data.user._id;
      console.log(patientId);
      await axios.get(`http://localhost:4000/api/v1/pdf/${patientId}`, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Pdf created");
    } catch (error) {
      toast.error(error.response);
    }
    navigateTo("/");
  };
  return (
    <Con.Provider
      value={{
        section,
        setSection,
        s1Notice,
        sets1Notice,

        s2Arelation,
        sets2Arelation,
        s2ASection1,
        sets2ASection1,

        s2Brelation,
        sets2Brelation,
        s2BSection1,
        sets2BSection1,

        s3FirstName,
        sets3FirstName,
        s3LastName,
        sets3LastName,
        s3Signature,
        sets3Signature,
        s3Date,
        sets3Date,
        s3HomePhoneNo,
        sets3HomePhoneNo,
        s3WorkPhoneNo,
        sets3WorkPhoneNo,
        checkedOne,
        setCheckedOne,
        checkedTwo,
        setCheckedTwo,
        checkedThree,
        setCheckedThree,

        s4Notes,
        sets4Notes,
        s4Signature,
        sets4Signature,
        s4Date,
        sets4Date,
      }}
    >
      <div className="sections">
        <div className="step-row">
          <div id="progress"></div>
          <div className="step-col">
            <small>Section 1</small>
          </div>
          <div className="step-col">
            <small>Section 2</small>
          </div>
          <div className="step-col">
            <small>Section 3</small>
          </div>
          <div className="step-col">
            <small>Section 4</small>
          </div>
        </div>
        {step === 1 && <Section1 onNext={handleNext} />}
        {step === 2 && <Section2 onBack={handleBack} onNext={handleNext} />}
        {step === 3 && <Section3 onBack={handleBack} onNext={handleNext} />}
        {step === 4 && <Section4 onBack={handleBack} onSubmit={handleEnroll} />}
      </div>
    </Con.Provider>
  );
};

export default EnrollmentForm;
