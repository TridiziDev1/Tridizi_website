import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import bgImage from "../../assets/images/branding-bg.png";
import planning from "../../assets/images/planning.png";
import serviceicon from "../../assets/images/serviceicon-4.png";
import execution from "../../assets/images/execution.png";
import accountaccess from "../../assets/images/account-access.png";
import app1Marketing from "../../assets/images/appl-marketing.png";
import addcustomisation  from "../../assets/images/ad customisation.png";
import targetAud from "../../assets/images/target-audience.png";
import validRes from "../../assets/images/valid-responcs.png";
import lowCpc from "../../assets/images/low-cpc.png";
import linkPort from "../../assets/images/link-port (1).png";
import linkPort2 from "../../assets/images/link-port (2).png";
import linkPortimg from "../../assets/images/link-port.jpg";
import competitor from "../../assets/images/competitor analysis.png";
import sv1 from "../../assets/images/serviceicon-1.png";
import sv2 from "../../assets/images/serviceicon-2.png";
import sv3 from "../../assets/images/serviceicon-3.png";
import tick from "../../assets/images/tick.png";
import servimg from "../../assets/images/servimg.jpeg";
import Footer from "../../Components/Footer/Footer";
import ClientImages from "../../Components/ClientsImages/ClientImages";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import "./PerformanceMarketing.css";
import Rating from "../../Components/Rating/Rating";

const PerformanceMarketing = () => {
  return (
    <>
      <ThirdPartyScripts />
      <SideBar />

      <Navbar bgImage={bgImage}>
        <div className="row">
          <div className="col-lg-7 col-sm-6 hero1">
            <p>
              TriDizi . <span style={{ color: "#F5900D" }}> Branding</span>
            </p>
            <h1 style={{letterSpacing:'0.5px'}}>Performance Marketing</h1>
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
          <div className="row ">
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
                Leads, More Opportunities, and More Revenue
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

      <section className="appmarketing_add_details">
        <div className="add_details">
          <div className="appmarketing_items1">
            <p>
              To Achieve the targeted results understanding the business
              requirements is very important. Without Business understanding it
              cannot fulfill the requirement.
            </p>
            <div className="img_tag">
              <img src={serviceicon} alt="" />
              <p className="Img_alt_details">Requirements</p>
            </div>
          </div>
          {/* execution */}
          <div className="appmarketing_items4">
            <p>
              Proven results will get from our top experts who working on your
              campaigns to grow your business.
            </p>
            <div className="img_tag">
              <img src={execution} alt="" />
              <p className="Img_alt_details">Execution</p>
            </div>
          </div>

          <div className="appmarketing_items3">
            <p>
              Need an account access to your platforms to run the campaigns at
              different levels. You can see the weekly reports from your
              accounts only.
            </p>
            <div className="img_tag">
              <img src={accountaccess} alt="" />
              <p className="Img_alt_details">Accessibility</p>
            </div>
          </div>
          <div className="appmarketing_items2">
            <p>
              Our experienced team will do the Keyword analysis and competitive
              analysis to drive more results to the campaign.
            </p>
            <div className="img_tag">
              <img src={competitor} alt="" />
              <p className="Img_alt_details">Competitor Analysis</p>
            </div>
          </div>
          <div className="appmarketing_items5">
            <p>
              Our campaign running is on a weekly basis. Every week New
              Strategy, New Creative, New Campaign.
            </p>
            <div className="img_tag">
              <img src={planning} alt="" />
              <p className="Img_alt_details">Planning</p>
            </div>
          </div>
          <img src={app1Marketing} className="bpImg1" alt="" />
          <span className="li-1">---------------------</span>
          <span className="li-2">---------------------</span>
          <span className="li-3">---------------------</span>
          <span className="li-4">---------------------</span>
          <span className="li-5">---------------------</span>
        </div>
      </section>

      {/* --------------------------------------------------------------------------- */}

      <div className="container-fluid testmonial">
        <div className="row justify-content-center ">
          <div className="container separator">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="hed text-center">
            <div className="dot mx-auto"></div>
            <h1 style={{ color: "#F5900D", fontWeight: 700 }}>Portfolio</h1>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 tests">
            <div className="row">
              <div className="card test bg-transparent text-white">
                <img src={addcustomisation} alt="Ad customisation" />
                <h2>Ad Customization</h2>
              </div>
              <div className="card test  bg-transparent  text-white">
                <img src={lowCpc} alt="Low CPC Rate" />
                <h2>Low CPC Rate</h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="card test  bg-transparent  text-white">
                <img src={targetAud} alt="Target Demographies" />
                <h2>Target Demographies</h2>
              </div>
              <div className="card test bg-transparent  text-white">
                <img src={validRes} alt="Valid Responses" />
                <h2>Valid Responses</h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 col-md-6 col-sm-12 test-1">
                <img src={linkPort} alt="image" className="w-100" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 test-1">
                <img src={linkPort2} alt="image" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 reach-audi d-flex justify-content-center mt-4">
            <img src={linkPortimg} alt="image" className="img-fluid" />
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

export default PerformanceMarketing;
