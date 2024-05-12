import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h2>Biography</h2>
          <b />
          <p>
            Thrive's platform is designed to help health systems achieve their
            target outcomes by reducing cost of care.
          </p>
          <p>Enhancing patient experience.</p>
          <p>
            98% completion rate of patient questionnaires Delivering better
            clinical outcomes
          </p>
          <p>65% increase in disease knowledge </p>
          <p>
            65% increase in disease knowledge And improving provider experience.{" "}
          </p>
          <p>Generate survivorship care plans 95% faster</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
