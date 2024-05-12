import React, { useContext } from "react";
import { Con } from "./EnrollmentForm";

const Section4 = ({ onBack, onSubmit }) => {
  const {
    s4Notes,
    sets4Notes,
    s4Signature,
    sets4Signature,
    s4Date,
    sets4Date,
  } = useContext(Con);
  // const handleSubmit = async (e, req, res) => {
  //   e.preventDefault();
  //   try {
  //     const patientId = req.user._id;
  //     const { pdf } = await axios
  //       .post(`http://localhost:4000/api/v1/pdf/${patientId}`, {
  //         withCredentials: true,
  //         headers: { "Content-Type": "application/json" },
  //       })
  //       .then((res) => {
  //         toast.success(res.data.message);
  //         navigateTo("/");
  //       });
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };
  return (
    <>
      <div
        style={{
          paddingTop: "150px",
          paddingLeft: "150px",
          paddingBottom: "50px",
        }}
      ></div>
      <div className="contain" id="form4">
        <div className="container">
          <div>Section 4 - Family doctor information</div>
          <hr />
          <br />

          <form onSubmit={onSubmit}>
            <div className="row">
              <label htmlFor="notes">Notes</label>
              <br />
              <input
                type="text"
                placeholder="Enter notes here"
                id="notes"
                value={s4Notes}
                onChange={(e) => sets4Notes(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="column2">
                <label htmlFor="sign">Signature</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Signature"
                  id="sign"
                  value={s4Signature}
                  onChange={(e) => sets4Signature(e.target.value)}
                />
              </div>
              <div className="column">
                <label htmlFor="date">Date</label>
                <br />
                <input
                  type={"date"}
                  id="date"
                  placeholder="Select birthdate"
                  value={s4Date}
                  onChange={(e) => sets4Date(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="btn-box">
              <button type="button" onClick={onBack}>
                Back
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Section4;
