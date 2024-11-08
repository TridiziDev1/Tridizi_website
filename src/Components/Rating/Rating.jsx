import React from 'react'
import sv1 from "../../assets/images/serviceicon-1.png";
import sv2 from "../../assets/images/serviceicon-2.png";
import sv3 from "../../assets/images/serviceicon-3.png";

const Rating = () => {
  return (
    <section className="rating2">
      <div className="container separator">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="ratingContent">
        <span className="span1">----------------</span>
        <span className="span2">----------------</span>
        <div className="rating_content1">
          <img src={sv1} alt="Icon" />
          <div className="item_h1_h5">
            <h1>120+</h1>
            <h5>Clients</h5>
          </div>
        </div>
        <div className="rating_content1">
          <img src={sv2} alt="Icon" />
          <div className="item_h1_h5">
            <h1>50+</h1>
            <h5>Rating</h5>
          </div>
        </div>
        <div className="rating_content1">
          <img src={sv3} alt="Icon" />
          <div className="item_h1_h5">
            <h1>10+</h1>
            <h5>Experience</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rating
