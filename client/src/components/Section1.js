import React, { useContext } from "react";
import { Con } from "./EnrollmentForm";

const Section1 = ({ onNext }) => {
  const { section, setSection, s1Notice, sets1Notice } = useContext(Con);

  const handleCheckBoxChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setSection({
        ...section,
        s1Sma: checked,
        s1Raddress1: section.s1Maddress1,
        s1Rcity: section.s1Mcity,
        s1Rpcode: section.s1Mpcode,
      });
    } else {
      setSection({
        ...section,
        s1Sma: checked,
        s1Raddress1: "",
        s1Rcity: "",
        s1Rpcode: "",
      });
    }
  };

  const onValueChange = (event) => {
    sets1Notice(event.target.value);
  };

  return (
    <>
      <div
        style={{
          paddingTop: "150px",
          paddingLeft: "150px",
          paddingBottom: "50px",
        }}
        id="form1"
      >
        <h2>Patient enrollment and Consent form</h2>
        <p>Create and record patient caregiver information</p>
      </div>
      <div className="contain">
        <div className="container">
          <div>Section 1 - I want to enroll myself with the family doctor</div>
          <hr />
          <br />
          <form>
            <div className="row">
              <div className="column">
                <label htmlFor="lname">Last Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter patient's last Name"
                  id="lname"
                  value={section.s1LastName}
                  onChange={(e) =>
                    setSection({ ...section, s1LastName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="column">
                <label htmlFor="fname">First Name</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  placeholder="Enter patient's first Name"
                  value={section.s1FirstName}
                  onChange={(e) =>
                    setSection({ ...section, s1FirstName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="column">
                <label htmlFor="mname">Middle Name</label>
                <br />
                <input
                  type="text"
                  id="mname"
                  placeholder="Enter patient's middle Name"
                  value={section.s1MiddleName}
                  onChange={(e) =>
                    setSection({ ...section, s1MiddleName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type="date"
                  id="dob"
                  placeholder="Select birthdate"
                  value={section.s1Dob}
                  onChange={(e) =>
                    setSection({ ...section, s1Dob: e.target.value })
                  }
                  required
                />
              </div>
              <div className="column">
                <label htmlFor="gender">Sex</label>
                <select
                  id="gender"
                  value={section.s1Gender}
                  onChange={(e) =>
                    setSection({ ...section, s1Gender: e.target.value })
                  }
                  required
                >
                  <option value="">Select Sex of the patient</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="column">
                <label htmlFor="hno">Health Number</label>
                <input
                  type="text"
                  id="hno"
                  placeholder="Enter health identifier"
                  value={section.s1HealthNumber}
                  onChange={(e) =>
                    setSection({ ...section, s1HealthNumber: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="column2">
                <label htmlFor="email">Email ID</label>
                <input
                  type="text"
                  placeholder="Enter patient Email ID"
                  id="email"
                  value={section.s1Email}
                  onChange={(e) =>
                    setSection({ ...section, s1Email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="column2" style={{ fontSize: 14 }}>
                <div>
                  <label htmlFor="notice-mail">
                    Send notices from my family doctor's office to me by:
                  </label>
                </div>

                <label>
                  <input
                    type="radio"
                    value="regular_mail"
                    checked={s1Notice === "regular_mail"}
                    onChange={onValueChange}
                  />
                  Regular mail
                </label>
                <label>
                  <input
                    type="radio"
                    value="email"
                    checked={s1Notice === "email"}
                    onChange={onValueChange}
                  />
                  Email(if possible)
                </label>
                <br />
              </div>
            </div>

            <div>
              <p>Mailing Address</p>
            </div>
            <hr />
            <div>
              <label htmlFor="maddr1">Address1</label>
              <input
                type="text"
                id="maddr1"
                placeholder="Apartment No, Street No, and Name, or P.O. Box, Rural Route, General Delivery"
                value={section.s1Maddress1}
                onChange={(e) =>
                  setSection({ ...section, s1Maddress1: e.target.value })
                }
                required
              />
              <label htmlFor="mcity">City/Town</label>
              <input
                type="text"
                id="mcity"
                placeholder="Enter caregiver first name"
                value={section.s1Mcity}
                onChange={(e) =>
                  setSection({ ...section, s1Mcity: e.target.value })
                }
                required
              />
              <label htmlFor="mpcode">Postal Code</label>
              <input
                type="text"
                id="mpcode"
                placeholder="Enter caregiver postal code"
                value={section.s1Mpcode}
                onChange={(e) =>
                  setSection({ ...section, s1Mpcode: e.target.value })
                }
                required
              />
            </div>

            <div>
              <p>Residence Address</p>
            </div>
            <hr />
            <div>
              <label>
                <input
                  type="checkbox"
                  value={section.s1Sma}
                  checked={section.s1Sma === true}
                  onChange={handleCheckBoxChange}
                />
                Same as mailing address
              </label>
            </div>

            <div>
              <label htmlFor="raddr1">Address1</label>
              <input
                type="text"
                id="raddr1"
                placeholder="Apartment No, Street No, and Name, or P.O. Box, Rural Route, General Delivery"
                value={
                  section.s1Sma ? section.s1Maddress1 : section.s1Raddress1
                }
                disabled={section.s1Sma}
                onChange={(e) =>
                  setSection({ ...section, s1Raddress1: e.target.value })
                }
              />
              <label htmlFor="rcity">City/Town</label>
              <input
                type="text"
                id="rcity"
                placeholder="Enter caregiver first name"
                value={section.s1Sma ? section.s1Mcity : section.s1Rcity}
                disabled={section.s1Sma}
                onChange={(e) =>
                  setSection({ ...section, s1Rcity: e.target.value })
                }
              />
              <label htmlFor="rpcode">Postal Code</label>
              <input
                type="text"
                id="rpcode"
                placeholder="Enter caregiver postal code"
                value={section.s1Sma ? section.s1Mpcode : section.s1Rpcode}
                disabled={section.s1Sma}
                onChange={(e) =>
                  setSection({ ...section, s1Rpcode: e.target.value })
                }
              />
            </div>
            <div className="btn-box">
              <button className="button" onClick={onNext}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Section1;
