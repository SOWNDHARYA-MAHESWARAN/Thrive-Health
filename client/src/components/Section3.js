import React, { useContext } from "react";
import { Con } from "./EnrollmentForm";
import SignatureCanvas from "react-signature-canvas";
const Section3 = ({ onBack, onNext }) => {
  const {
    s3FirstName,
    sets3FirstName,
    s3LastName,
    sets3LastName,
    sign,
    setSign,
    url,
    setUrl,
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
  } = useContext(Con);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };

  const handleClear = () => {
    sign.clear();
    setUrl("");
  };
  const handleGenerate = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
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
      <div className="contain" id="form3">
        <div className="container">
          <div>Section 3 - Signature</div>
          <hr />
          <br />
          <div>
            <h4>Consent</h4>
            <p>
              I have read and agree to the Patient Commitment, the Consent to
              Release Personal Health information and the Cancellation
              Conditions on this form. I acknowlege that this Enrollment is not
              intended to be a legally binding contract and is not intended to
              give rise to any new legal obligations between my family doctor
              and me.
            </p>
          </div>
          <form>
            <div className="row">
              <div className="column">
                <label>
                  I am signing on behalf of <br />
                  (check all the apply)
                </label>
                <Checkbox
                  label="Myself"
                  value={checkedOne}
                  onChange={handleChangeOne}
                />
                <Checkbox
                  label="Child(ren)"
                  value={checkedTwo}
                  onChange={handleChangeTwo}
                />
                <Checkbox
                  label="Dependent Adult(s)"
                  value={checkedThree}
                  onChange={handleChangeThree}
                />
              </div>
              <div className="column">
                <label htmlFor="fname">First Name</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  placeholder="Enter patient's first Name"
                  value={s3FirstName}
                  onChange={(e) => sets3FirstName(e.target.value)}
                  required
                />
              </div>

              <div className="column">
                <label htmlFor="lname">Last Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter patient's last Name"
                  id="lname"
                  value={s3LastName}
                  onChange={(e) => sets3LastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label htmlFor="sign">Signature</label>
                <div>
                  <div
                    style={{
                      border: "2px solid black",
                      width: 250,
                      height: 200,
                    }}
                  >
                    <SignatureCanvas
                      canvasProps={{
                        width: 250,
                        height: 200,
                        className: "sigCanvas",
                      }}
                      ref={(data) => setSign(data)}
                    />
                  </div>
                  <button type="button" onClick={handleClear}>
                    Clear
                  </button>
                  <button type="button" onClick={handleGenerate}>
                    Confirm
                  </button>
                </div>
              </div>
              <div className="column">
                <label htmlFor="date">Date</label>
                <br />
                <input
                  type={"date"}
                  id="date"
                  placeholder="Select birthdate"
                  value={s3Date}
                  onChange={(e) => sets3Date(e.target.value)}
                  required
                />
              </div>

              <div className="column">
                <label htmlFor="hno">Home Telephone No.</label>
                <br />
                <input
                  type="number"
                  id="htn"
                  placeholder="Enter Home Telephone No"
                  value={s3HomePhoneNo}
                  onChange={(e) => sets3HomePhoneNo(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label htmlFor="wno">Work Telephone No.</label>
                <br />
                <input
                  type="number"
                  id="wtn"
                  placeholder="Enter Work Telephone No"
                  value={s3WorkPhoneNo}
                  onChange={(e) => sets3WorkPhoneNo(e.target.value)}
                />
              </div>
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
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};
export default Section3;
