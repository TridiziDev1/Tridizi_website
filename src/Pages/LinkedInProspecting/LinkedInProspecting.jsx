import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import bgImage from "../../assets/images/branding-bg.png";
import bppng from "../../assets/images/linkprosp.png";
import team from "../../assets/images/team.png";
import target from "../../assets/images/target.png";
import databaseStorage from "../../assets/images/database-storage.png";
import content from "../../assets/images/contentcreation.png";
import agreement from "../../assets/images/agreement.png";
import correct from "../../assets/images/correct.png";
import linkedintestimonial from "../../assets/images/linkedintestimonial.jpg";
import execution from "../../assets/images/execution.png";  
import tick from "../../assets/images/tick.png";
import servimg from "../../assets/images/servimg.jpeg";
import Footer from "../../Components/Footer/Footer";
import ClientImages from "../../Components/ClientsImages/ClientImages";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import "./LinkedInProspecting.css";
import Rating from "../../Components/Rating/Rating";

const LinkedInProspecting = () => {
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
            <h1 style={{letterSpacing:'0.5px'}}>LinkedIn Prospecting</h1>
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
            <h1 className="fix_font">
              Grab the responses from the{" "}
              <span style={{ color: "#F5900D" }}>
                targeted prospective market through the LinkedIn platform. More
                Leads, More Opportunities, and More Revenue.
              </span>
            </h1>
            <p className="row_para">
              Unlock your business's growth potential with targeted LinkedIn
              prospecting. Connect with high-value leads and expand your
              network. Elevate your lead generation game with our specialized
              approach. Connect with precision, grow your network, and drive
              success.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}

      <section className="linkedin_add_details">
        <div className="add_details">
          <div className="linkedin_items1">
            <p className="pTag">
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={target} alt="" />
              <p className="Img_alt_details00">Requirements</p>
            </div>
          </div>

          <div className="linkedin_items2">
            <p>
              Never fails in Branding execution, On-time post-delivery, working
              on Engagement, Sharing to the respective platforms, etc.
            </p>
            <div className="img_tag">
              <img src={databaseStorage} alt="" />
              <p className="Img_alt_details00">Execution</p>
            </div>
          </div>

          <div className="linkedin_items3">
            <p>
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={execution} alt="" />
              <p className="Img_alt_details00">R & D</p>
            </div>
          </div>
          <div className="linkedin_items4">
            <p>
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={content} alt="" />
              <p className="Img_alt_details00">Approval</p>
            </div>
          </div>
          <img src={bppng} className="bpImg30" alt="" />
          <span className="list-11">---------------------</span>
          <span className="list-22">---------------------</span>
          <span className="list-33">---------------------</span>
          <span className="list-44">---------------------</span>
          <span className="list-444">-------------</span>
        </div>
      </section>

      {/* ---------------- ----------------------------------------------------------- */}

      <div className="container-fluid testmonial">
        <div className="row">
          <div className="container separator">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="hed">
            <div className="dot"></div>
            <h1
              style={{ textAlign: "center", color: "#F5900D", fontWeight: 700 }}
            >
              Portfolio
            </h1>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 tests ">
            <div className="row">
              <div className="card test bg-transparent">
                <h1
                  style={{
                    color: "#F5900D",
                    fontSize: "70px",
                    marginBottom: "20px",
                    marginTop: "10px",
                  }}
                >
                  35%
                </h1>
                <h2>Upto Conversions</h2>
              </div>
              <div className="card test bg-transparent">
                <img src={team} alt="Dedicated Team" />
                <h2>Dedicated Team</h2>
              </div>
            </div>
            <div className="row">
              <div className="card test bg-transparent">
                <img src={correct} alt="Verified Data Set" />
                <h2>Verified Data Set</h2>
              </div>
              <div className="card test bg-transparent">
                <img src={agreement} alt="Quadmode Follow-up" />
                <h2>Quadmode Follow-up</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 testim ">
            <h2>Steve, GCG</h2>
            <div className="card monial bg-transparent  ">
              <img
                src={linkedintestimonial}
                className="linkedin_img"
                alt="LinkedIn Testimonial"
              />
              <p className="monial_p" style={{ color: "white" }}>
                Regarding Sandeep and his colleagues, including Ms Haritha, they
                are a pleasure to deal with. Very thorough and professional.
              </p>
            </div>
            <p className="steve_info">
              We have dealt with many companies over the years, offering
              services of Lead Generation, List Generation, and more recently
              digital marketing. I have instructed our company as our go-to
              provider. I will indeed endorse them and recommend using them for
              your marketing requirements.
            </p>
          </div>
        </div>
       
      </div>

      {/* --------------------------------------------- */}

      <Rating/>
      {/* -------------------------------------------- */}
      <section className="why_choose_us">
        <div className="choose-row">
          <div className="choose-left">
            <div className="dot"></div>
            <p>WHY CHOOSE US</p>
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

export default LinkedInProspecting;
