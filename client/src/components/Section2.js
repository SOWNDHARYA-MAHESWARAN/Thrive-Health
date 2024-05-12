import React, { useContext } from "react";
import { Con } from "./EnrollmentForm";

const Section2 = ({ onBack, onNext }) => {
  const {
    section,
    setSection,

    s2Arelation,
    sets2Arelation,
    s2ASection1,
    sets2ASection1,

    s2Brelation,
    sets2Brelation,
    s2BSection1,
    sets2BSection1,
  } = useContext(Con);

  const handleCheckBoxChange1 = (event) => {
    const { checked } = event.target;
    if (checked) {
      setSection({
        ...section,
        s2ASs1: checked,
        s2AMaddress1: section.s1Maddress1,
        s2AMcity: section.s1Mcity,
        s2AMpcode: section.s1Mpcode,
      });
    } else {
      setSection({
        ...section,
        s2ASs1: checked,
        s2AMaddress1: "",
        s2AMcity: "",
        s2AMpcode: "",
      });
    }
  };
  const handleCheckBoxChange2 = (event) => {
    const { checked } = event.target;
    if (checked) {
      setSection({
        ...section,
        s2ASma: checked,
        s2ARaddress1: section.s1Raddress1,
        s2ARcity: section.s1Rcity,
        s2ARpcode: section.s1Rpcode,
      });
    } else {
      setSection({
        ...section,
        s2ASma: checked,
        s2ARaddress1: "",
        s2ARcity: "",
        s2ARpcode: "",
      });
    }
  };
  const handleCheckBoxChange3 = (event) => {
    const { checked } = event.target;
    if (checked) {
      setSection({
        ...section,
        s2BSs1: checked,
        s2BMaddress1: section.s1Maddress1,
        s2BMcity: section.s1Mcity,
        s2BMpcode: section.s1Mpcode,
      });
    } else {
      setSection({
        ...section,
        s2BSs1: checked,
        s2BMaddress1: "",
        s2BMcity: "",
        s2BMpcode: "",
      });
    }
  };
  const handleCheckBoxChange4 = (event) => {
    const { checked } = event.target;
    if (checked) {
      setSection({
        ...section,
        s2BSma: checked,
        s2BRaddress1: section.s1Raddress1,
        s2BRcity: section.s1Rcity,
        s2BRpcode: section.s1Rpcode,
      });
    } else {
      setSection({
        ...section,
        s2BSma: checked,
        s2BRaddress1: "",
        s2BRcity: "",
        s2BRpcode: "",
      });
    }
  };
  const onValueChangeA = async (event) => {
    sets2Arelation(event.target.value);
  };
  const onValueChangeB = async (event) => {
    sets2Brelation(event.target.value);
  };

  return (
    <>
      <div
        style={{
          paddingTop: "150px",
          paddingLeft: "150px",
          paddingBottom: "50px",
        }}
      ></div>
      <div className="contain" id="form2">
        <div className="container">
          <div>
            Section 2 - I want to enroll my child(ren)under 16 and/or dependent
            adult(s) with the family doctor
          </div>
          <hr />
          <h3>A</h3>
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
                  value={s2ASection1.s2ALastName}
                  onChange={(e) =>
                    sets2ASection1({
                      ...s2ASection1,
                      s2ALastName: e.target.value,
                    })
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
                  value={s2ASection1.s2AFirstName}
                  onChange={(e) =>
                    sets2ASection1({
                      ...s2ASection1,
                      s2AFirstName: e.target.value,
                    })
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
                  value={s2ASection1.s2AMiddleName}
                  onChange={(e) =>
                    sets2ASection1({
                      ...s2ASection1,
                      s2AMiddleName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type={"date"}
                  id="dob"
                  placeholder="Select birthdate"
                  value={s2ASection1.s2ADob}
                  onChange={(e) =>
                    sets2ASection1({
                      ...s2ASection1,
                      s2ADob: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="column">
                <label htmlFor="">Sex</label>
                <select
                  value={sets2ASection1.s2AGender}
                  onChange={(e) =>
                    sets2ASection1({
                      ...s2ASection1,
                      s2AGender: e.target.value,
                    })
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
                  value={s2ASection1.s2AHealthNumber}
                  onChange={(e) =>
                    sets2ASection1({
                      ...s2ASection1,
                      s2AHealthNumber: e.target.value,
                    })
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
                  value={s2ASection1.s2AEmail}
                  onChange={(e) =>
                    sets2ASection1({
                      ...s2ASection1,
                      s2AEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="column2" style={{ fontSize: 14 }}>
                <div>
                  <label htmlFor="relation">Iam this Person's</label>
                </div>
                <label>
                  <input
                    type="radio"
                    value="parent"
                    checked={s2Arelation === "parent"}
                    onChange={onValueChangeA}
                  />
                  Parent
                </label>
                <label>
                  <input
                    type="radio"
                    value="guardian"
                    checked={s2Arelation === "guardian"}
                    onChange={onValueChangeA}
                  />
                  Legal guardian
                </label>
                <label>
                  <input
                    type="radio"
                    value="attorney"
                    checked={s2Arelation === "attorney"}
                    onChange={onValueChangeA}
                  />
                  Attorney for personal care
                </label>
              </div>
            </div>

            <div>
              <p>Mailing Address</p>
            </div>
            <hr />
            <div>
              <label>
                <input
                  type="checkbox"
                  value={section.s2ASs1}
                  checked={section.s2ASs1 === true}
                  onChange={handleCheckBoxChange1}
                />
                Same as Section1
              </label>
            </div>
            <div>
              <label htmlFor="maddr1">Address1</label>
              <input
                type="text"
                id="maddr1"
                placeholder="Apartment No, Street No, and Name, or P.O. 
              Box, Rural Route, General Delivery"
                value={
                  section.s2ASs1 ? section.s1Maddress1 : section.s2AMaddress1
                }
                disabled={section.s2ASs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2AMaddress1: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="mcity">City/Town</label>
              <input
                type="text"
                id="mcity"
                placeholder="Enter caregiver first name"
                value={section.s2ASs1 ? section.s1Mcity : section.s2AMcity}
                disabled={section.s2ASs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2AMcity: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="mpcode">Postal Code</label>
              <input
                type="text"
                id="mpcode"
                placeholder="Enter caregiver postal code"
                value={section.s2ASs1 ? section.s1Mpcode : section.s2AMpcode}
                disabled={section.s2ASs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2AMpcode: e.target.value,
                  })
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
                  value={section.s2ASma}
                  checked={section.s2ASma === true}
                  onChange={handleCheckBoxChange2}
                />
                Same as mailing address
              </label>
            </div>
            <div>
              <label htmlFor="raddr1">Address1</label>
              <input
                type="text"
                id="raddr1"
                placeholder="Apartment No, Street No, and Name, or P.O. 
              Box, Rural Route, General Delivery"
                value={
                  section.s2ASma ? section.s1Raddress1 : section.s2ARaddress1
                }
                disabled={section.s2ASs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2ARaddress1: e.target.value,
                  })
                }
              />
              <label htmlFor="rcity">City/Town</label>
              <input
                type="text"
                id="rcity"
                placeholder="Enter caregiver first name"
                value={section.s2ASma ? section.s1Rcity : section.s2ARcity}
                disabled={section.s2ASs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2ARcity: e.target.value,
                  })
                }
              />
              <label htmlFor="rpcode">Postal Code</label>
              <input
                type="text"
                id="rpcode"
                placeholder="Enter caregiver postal code"
                value={section.s2ASma ? section.s1Rpcode : section.s2ARpcode}
                disabled={section.s2ASs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2ARpcode: e.target.value,
                  })
                }
              />
            </div>
          </form>

          <h3>B</h3>
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
                  value={s2BSection1.s2BLastName}
                  onChange={(e) =>
                    sets2BSection1({
                      ...s2BSection1,
                      s2BLastName: e.target.value,
                    })
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
                  value={s2BSection1.s2BFirstName}
                  onChange={(e) =>
                    sets2BSection1({
                      ...s2BSection1,
                      s2BFirstName: e.target.value,
                    })
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
                  value={s2BSection1.s2BMiddleName}
                  onChange={(e) =>
                    sets2BSection1({
                      ...s2BSection1,
                      s2BMiddleName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type={"date"}
                  id="dob"
                  placeholder="Select birthdate"
                  value={s2BSection1.s2BDob}
                  onChange={(e) =>
                    sets2BSection1({
                      ...s2BSection1,
                      s2BDob: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="column">
                <label htmlFor="">Sex</label>
                <select
                  value={sets2BSection1.s2BGender}
                  onChange={(e) =>
                    sets2BSection1({
                      ...s2BSection1,
                      s2BGender: e.target.value,
                    })
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
                  value={s2BSection1.s2BHealthNumber}
                  onChange={(e) =>
                    sets2BSection1({
                      ...s2BSection1,
                      s2BHealthNumber: e.target.value,
                    })
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
                  value={s2BSection1.s2BEmail}
                  onChange={(e) =>
                    sets2BSection1({
                      ...s2BSection1,
                      s2BEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="column2" style={{ fontSize: 14 }}>
                <div>
                  <label htmlFor="relation">Iam this Person's</label>
                </div>
                <label>
                  <input
                    type="radio"
                    value="parent"
                    checked={s2Brelation === "parent"}
                    onChange={onValueChangeB}
                  />
                  Parent
                </label>
                <label>
                  <input
                    type="radio"
                    value="guardian"
                    checked={s2Brelation === "guardian"}
                    onChange={onValueChangeB}
                  />
                  Legal guardian
                </label>
                <label>
                  <input
                    type="radio"
                    value="attorney"
                    checked={s2Brelation === "attorney"}
                    onChange={onValueChangeB}
                  />
                  Attorney for personal care
                </label>
              </div>
            </div>

            <div>
              <p>Mailing Address</p>
            </div>
            <hr />
            <div>
              <label>
                <input
                  type="checkbox"
                  value={section.s2BSs1}
                  checked={section.s2BSs1 === true}
                  onChange={handleCheckBoxChange3}
                />
                Same as Section1
              </label>
            </div>
            <div>
              <label htmlFor="maddr1">Address1</label>
              <input
                type="text"
                id="maddr1"
                placeholder="Apartment No, Street No, and Name, or P.O. 
              Box, Rural Route, General Delivery"
                value={
                  section.s2BSs1 ? section.s1Maddress1 : section.s2BMaddress1
                }
                disabled={section.s2BSs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2BMaddress1: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="mcity">City/Town</label>
              <input
                type="text"
                id="mcity"
                placeholder="Enter caregiver first name"
                value={section.s2BSs1 ? section.s1Mcity : section.s2BMcity}
                disabled={section.s2BSs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2BMcity: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="mpcode">Postal Code</label>
              <input
                type="text"
                id="mpcode"
                placeholder="Enter caregiver postal code"
                value={section.s2BSs1 ? section.s1Mpcode : section.s2BMpcode}
                disabled={section.s2BSs1}
                onChange={(e) =>
                  setSection({
                    ...section,
                    s2BMpcode: e.target.value,
                  })
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
                  value={section.s2BSma}
                  checked={section.s2BSma === true}
                  onChange={handleCheckBoxChange4}
                />
                Same as mailing address
              </label>
            </div>
            <div>
              <label htmlFor="raddr1">Address1</label>
              <input
                type="text"
                id="raddr1"
                placeholder="Apartment No, Street No, and Name, or P.O. 
              Box, Rural Route, General Delivery"
                value={
                  section.s2BSma ? section.s1Raddress1 : section.s2BRaddress1
                }
                disabled={section.s2BSs1}
                onChange={(e) =>
                  section({
                    ...section,
                    s2BRaddress1: e.target.value,
                  })
                }
              />
              <label htmlFor="rcity">City/Town</label>
              <input
                type="text"
                id="rcity"
                placeholder="Enter caregiver first name"
                value={section.s2BSma ? section.s1Rcity : section.s2BRcity}
                disabled={section.s2BSs1}
                onChange={(e) =>
                  section({
                    ...section,
                    s2BRcity: e.target.value,
                  })
                }
              />
              <label htmlFor="rpcode">Postal Code</label>
              <input
                type="text"
                id="rpcode"
                placeholder="Enter caregiver postal code"
                value={section.s2BSma ? section.s1Rpcode : section.s2BRpcode}
                disabled={section.s2BSs1}
                onChange={(e) =>
                  section({
                    ...section,
                    s2BRpcode: e.target.value,
                  })
                }
              />
            </div>
            <div className="btn-box">
              <button type="button" onClick={onBack}>
                Back
              </button>
              <button type="button" onClick={onNext}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Section2;
