import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import bgImage from "../../assets/images/branding-bg.png";
import bppng from "../../assets/images/bp.png";
import approval from "../../assets/images/approval.png";
import serviceicon from "../../assets/images/serviceicon-4.png";
import serviceicon6 from "../../assets/images/serviceicon-6.png";
import execution from "../../assets/images/execution.png";
import creation from "../../assets/images/creation.png";
import aquirelead1 from "../../assets/images/aquirelead-1.webp";
import aquirelead2 from "../../assets/images/aquirelead-2.jpg";
import aquirelead3 from "../../assets/images/aquirelead-3.jpg";
import aquirelead4 from "../../assets/images/aquirelead-4.jpg";
import goodtobuy1 from "../../assets/images/goodtobuy-1.jpg";
import vtalent2 from "../../assets/images/vtalent-2.jpg";
import vtalent1 from "../../assets/images/vtalent-1.jpg";
import fiftyfifty1 from "../../assets/images/50fifty-1.jpg";
import hiring from "../../assets/images/gtb hiring.png";

import tick from "../../assets/images/tick.png";
import servimg from "../../assets/images/servimg.jpeg";
import fiftyfifty2 from "../../assets/images/50fifty-2.jpg";
import goodtobuy2 from "../../assets/images/goodtobuy-2.jpg";
import subhasthira1 from "../../assets/images/subhasthira-1.png";
import Footer from "../../Components/Footer/Footer";
import ClientImages from "../../Components/ClientsImages/ClientImages";
import "./BrandPromoting.css";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import Rating from "../../Components/Rating/Rating";

const BrandPromting = () => {
  return (
    <>
      <ThirdPartyScripts />
      <SideBar />

      <Navbar bgImage={bgImage}>
        <div className="row">
          <div className="col-lg-7 col-sm-6 hero1">
            <p>
              TriDizi . <span style={{ color: "#F5900D" }}>Branding</span>
            </p>
            <h1>Brand Promotion</h1>
          </div>

          <div className="col-lg-5 col-sm-6 con-form">
            <h1>Get a quote from us.</h1>
            <p>Leave your details and we will get back to you soon.</p>
            <form
              id="contactForm"
              action="https://script.google.com/macros/s/AKfycbyTtw8UilS8_JvY1RTfxqlGbzhLZ3NyL5n-4s890ayRqxgu4BxEqlVtwG4FAvMW-Vw9HQ/exec"
              method="post"
              name="landing-pages"
            >
              <div className="mb-3" style={{ display: "none" }}>
                <label htmlFor="service" className="form-label">
                  Service
                </label>
                <input
                  type="text"
                  className="form-control1"
                  id="service"
                  name="Service"
                  value="Brand Promotion"
                />
              </div>
              <div className="formdata mb-3 ">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control1"
                  id="name"
                  name="Name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-3 formdata">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control1"
                  id="phone"
                  name="Phone"
                  placeholder="Enter your mobile number"
                  required
                  pattern="[6789][0-9]{9}"
                />
              </div>
              <div className="mb-3 formdata">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control1"
                  id="email"
                  name="Email"
                  placeholder="Email"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="mb-3 formdata">
                <label htmlFor="message" className="form-label">
                  Tell us about your project and timeline
                </label>
                <textarea
                  className="form-control1"
                  id="message"
                  name="Requirement"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Navbar>
      {/*<!---------------------------------------what we offer ?------------------------------------->*/}
      <section className="offer" style={{ marginTop: "200px" }}>
        <div className="container text">
          <div className="row">
            <div
              className="dot"
              style={{ margin: "10px 49%", height: "20px", width: "20px" }}
            ></div>
            <p
              className="offering"
              style={{ color: "#5D5D5D", fontSize: "14px" }}
            >
              WHAT WE'RE OFFERING
            </p>
            <h1>
              Elevate your brand's presence{" "}
              <span style={{ color: "#F5900D" }}>
                with our Social Media Marketing expertise.
              </span>
            </h1>
            <p className="row_para">
              Harness the power of online platforms to reach and engage your
              target audience effectively. In today's market, it's the key to
              standing out, building trust, and growing your business. Invest in
              your brand's success. We are the essential key to your branding
              success.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}

      <section className="brand_details">
        <div className="b_details">
          <div className="brand_details1">
            <p>
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={serviceicon} alt="" />
              <p className="Img_alt_details">Requirements</p>
            </div>
          </div>
          {/* execution */}
          <div className="brand_details2">
            <p>
              Never fails in Branding execution, On-time post-delivery, working
              on Engagement, Sharing to the respective platforms, etc.
            </p>
            <div className="img_tag">
              <img src={execution} alt="" />
              <p className="Img_alt_details">Execution</p>
            </div>
          </div>

          <div className="brand_details3">
            <p>
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={serviceicon6} alt="" />
              <p className="Img_alt_details">R & D</p>
            </div>
          </div>
          <div className="brand_details4">
            <p>
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={approval} alt="" />
              <p className="Img_alt_details">Approval</p>
            </div>
          </div>
          <div className="brand_details5">
            <p>
              We prepare the monthly Calendar prior to taking necessary
              execution without fail, which will give more trust in our work
              only.
            </p>
            <div className="img_tag">
              <img src={creation} alt="" />
              <p className="Img_alt_details">Creation</p>
            </div>
          </div>
          <img src={bppng} className="bpImg" alt="" />
          <span className="li-1">---------------------</span>
          <span className="li-2">---------------------</span>
          <span className="li-3">---------------------</span>
          <span className="li-4">---------------------</span>
          <span className="li-5">---------------------</span>
        </div>
      </section>

      <section className="brandDetails_minScreen">
        <div className="flexItem_1">
          <p>
            We start by gaining a deep understanding of your business
            objectives, target audience, and unique selling propositions. By
            aligning our strategies with your goals.
          </p>
          <div className="img_tag012">
            <img src={serviceicon} alt="" />
            <p className="Img_alt_details">Requirements</p>
          </div>
        </div>
        <div className="flexItem_2">
          <p>
            Never fails in Branding execution, On-time post-delivery, working on
            Engagement, Sharing to the respective platforms, etc.
          </p>
          <div className="img_tag012">
            <img src={execution} alt="" />
            <p className="Img_alt_details">Execution</p>
          </div>
        </div>
        <div className="flexItem_3">
          <p>
            We start by gaining a deep understanding of your business
            objectives, target audience, and unique selling propositions. By
            aligning our strategies with your goals.
          </p>
          <div className="img_tag012">
            <img src={serviceicon6} alt="" />
            <p className="Img_alt_details">R & D</p>
          </div>
        </div>
        <div className="flexItem_4">
          <p>
            We start by gaining a deep understanding of your business
            objectives, target audience, and unique selling propositions. By
            aligning our strategies with your goals.
          </p>
          <div className="img_tag012">
            <img src={approval} alt="" />
            <p className="Img_alt_details">Approval</p>
          </div>
        </div>
        <div className="flexItem_5">
          <p>
            We prepare the monthly Calendar prior to taking necessary execution
            without fail, which will give more trust in our work only.
          </p>
          <div className="img_tag012">
            <img src={creation} alt="" />
            <p className="Img_alt_details">Creation</p>
          </div>
        </div>
      </section>

      {/* ---------------- ----------------------------------------------------------- */}

      <div className="container gallery" style={{ marginTop: "50px" }}>
        <div className="container separator">
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="dot"></div>
        <h1>Portfolio</h1>

        <div className="head">
          <div className="Alead">
            <img
              src={aquirelead1}
              className="imgs3"
              alt="Brand promotion consultancy"
            />
            <img src={aquirelead2} className="imgs4" alt="Brand marketing" />
            <img src={aquirelead3} className="imgs5" alt="Brand campaigns" />
            <img
              src={aquirelead4}
              className="imgs6"
              alt="Brand promotion metrics"
            />
          </div>
        </div>

        <div className="head">
          <div className="Alead">
            <img
              src={goodtobuy1}
              className="imgs3"
              alt="Social media brand promotion"
            />
            <img
              src={hiring}
              className="imgs4"
              alt="Innovative brand campaigns"
            />
            <img
              src={vtalent2}
              className="imgs5"
              alt="Brand promotion contests"
            />
            <img src={vtalent1} className="imgs6" alt="Brand advertising" />
          </div>
        </div>

        <div className="head">
          <div className="Alead">
            <img
              src={fiftyfifty1}
              className="imgs3"
              alt="Social media marketing"
            />
            <img
              src={fiftyfifty2}
              className="imgs4"
              alt="Product launch promotion"
            />
            <img
              src={goodtobuy2}
              className="imgs5"
              alt="Brand promotion analytics"
            />
            <img
              src={subhasthira1}
              className="imgs6"
              alt="Branding strategies"
            />
          </div>
        </div>
      </div>

     

      {/* --------------------------------------------- */}
      <Rating />

     
      {/* -------------------------------------------- */}
      <section className="why_choose_us">
        <div className="choose-row">
          <div className="choose-left">
            <div className="dot"></div>
            <p className="choose_us">WHY CHOOSE US</p>
            <h1>
              Providing The <span style={{ color: "#F5900D" }}>Best</span>{" "}
              Services
            </h1>

            <div className="card tick">
              <div className="card-row">
                <div className="card-image grey">
                  <img src={tick} className="img-fluid" alt="Tick Icon" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Client-Centric Approach</h5>
                  <p className="card-text">
                    Putting clients at the center of everything you do is key.
                    Understand their needs, provide tailored solutions, and
                    maintain open communication. Building strong client
                    relationships is crucial for long-term success.
                  </p>
                </div>
              </div>
            </div>

            <div className="card tick">
              <div className="card-row">
                <div className="card-image grey">
                  <img src={tick} className="img-fluid" alt="Tick Icon" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Expertise and Innovation</h5>
                  <p className="card-text">
                    Stay at the forefront of your industry by continually
                    enhancing your expertise and embracing innovation. Be a
                    thought leader in your field and provide clients with the
                    latest, most effective solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="card tick">
              <div className="card-row">
                <div className="card-image grey">
                  <img src={tick} className="img-fluid" alt="Tick Icon" />
                </div>
                <div className="card-content">
                  <h5 className="card-title">Efficient Operations</h5>
                  <p className="card-text">
                    Streamline your internal processes to ensure efficiency.
                    This includes project management, communication, and
                    resource allocation. Efficiency not only benefits your
                    agency but also enhances client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="choose-right">
            <div className="orng">
              <div className="blk">
                <img src={servimg} alt="Service Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container separator">
        <div className="line" />
        <h2>50+ Brands Trust Us</h2>
        <div className="line" />
      </div>

      <ClientImages />
      <Footer />
    </>
  );
};

export default BrandPromting;
