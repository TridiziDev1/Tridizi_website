import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import bgImage from "../../assets/images/branding-bg.png";
import campaigns from "../../assets/images/executing the campaigns.png";
import statergies from "../../assets/images/statergies.png";
import businessrequirements from "../../assets/images/business requirements.png";
import achieve from "../../assets/images/achieve.png";
import app1Marketing from "../../assets/images/appl-marketing.png";
import compiAnalysis from "../../assets/images/competitive-analytics.png";
import sv1 from "../../assets/images/serviceicon-1.png";
import sv2 from "../../assets/images/serviceicon-2.png";
import sv3 from "../../assets/images/serviceicon-3.png";
import tick from "../../assets/images/tick.png";
import servimg from "../../assets/images/servimg.jpeg";
import Footer from "../../Components/Footer/Footer";
import ClientImages from "../../Components/ClientsImages/ClientImages";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import "./AppMarketing.css";
import Rating from "../../Components/Rating/Rating";

const AppMarketing = () => {
  return (
    <>
      <ThirdPartyScripts />
      <SideBar />

      <Navbar bgImage={bgImage}>
        <div className="row">
          <div className="col-lg-7 col-sm-6 hero1">
            <p>
              TriDizi . <span style={{ color: "#F5900D" }}> </span>
            </p>
            <h1>App Marketing</h1>
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
              Our complete app{" "}
              <span style={{ color: "#F5900D" }}>
                marketing solutions can help you reach the full potential of
                your application.
              </span>
            </h1>
            <p className="row_para">
              From boosting visibility on app stores to engaging users through
              strategic campaigns, we specialize in driving downloads and
              maximizing user retention. Let us help your app stand out in a
              crowded market and achieve its full success.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}

      <section className="appmarketing_add_details">
        <div className="add_details">
          <div className="appmarketing_items1">
            <p>
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={businessrequirements} alt="" />
              <p className="Img_alt_details">
                Understanding branding requirements
              </p>
            </div>
          </div>
          <div className="appmarketing_items4">
            <p>
              Based on our research and understanding, we develop tailored
              marketing strategies designed to maximize the visibility and reach
              of your app.
            </p>
            <div className="img_tag">
              <img src={statergies} alt="" />
              <p className="Img_alt_details">Appkying Strategies</p>
            </div>
          </div>

          <div className="appmarketing_items3">
            <p>
              We conduct thorough research to analyze your competitors'
              strengths, weaknesses, and marketing strategies. This helps us
              identify opportunities and devise strategies to outperform the
              competition, ensuring your app stands out in the market.
            </p>
            <div className="img_tag">
              <img src={compiAnalysis} alt="" />
              <p className="Img_alt_details">Competitive Analysis</p>
            </div>
          </div>
          <div className="appmarketing_items2">
            <p>
              Ultimately, our goal is to deliver tangible results that align
              with your business objectives. Whether it's increasing app
              downloads, improving user engagement, or boosting revenue.
            </p>
            <div className="img_tag">
              <img src={achieve} alt="" />
              <p className="Img_alt_details">Achieving Results</p>
            </div>
          </div>
          <div className="appmarketing_items5">
            <p>
              Our experienced team executes the marketing campaigns with
              precision and attention to detail. From creating compelling ad
              creatives to targeting the right audience segments, we ensure that
              every campaign is executed flawlessly to achieve optimal results.
            </p>
            <div className="img_tag">
              <img src={campaigns} alt="" />
              <p className="Img_alt_details">Executing Campaigns</p>
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

      <section className="appMarketing_minScreen">
        <div className="flexItem_11">
          <p>
            We start by gaining a deep understanding of your business
            objectives, target audience, and unique selling propositions. By
            aligning our strategies with your goals.
          </p>
          <div className="img_tag012">
            <img src={businessrequirements} alt="" />
            <p className="Img_alt_details">Understanding requirements</p>
          </div>
        </div>
        <div className="flexItem_22">
          <p>
            Based on our research and understanding, we develop tailored
            marketing strategies designed to maximize the visibility and reach
            of your app.
          </p>
          <div className="img_tag012">
            <img src={statergies} alt="" />
            <p className="Img_alt_details">Appkying Strategies</p>
          </div>
        </div>
        <div className="flexItem_33">
          <p>
            We conduct thorough research to analyze your competitors' strengths,
            weaknesses, and marketing strategies. This helps us identify
            opportunities and devise strategies to outperform the competition,
            ensuring your app stands out in the market.
          </p>
          <div className="img_tag012">
            <img src={compiAnalysis} alt="" />
            <p className="Img_alt_details">Competitive Analysis</p>
          </div>
        </div>
        <div className="flexItem_44">
          <p>
            Ultimately, our goal is to deliver tangible results that align with
            your business objectives. Whether it's increasing app downloads,
            improving user engagement, or boosting revenue.
          </p>
          <div className="img_tag012">
            <img src={achieve} alt="" />
            <p className="Img_alt_details">Achieving Results</p>
          </div>
        </div>
        <div className="flexItem_5">
          <p>
            Our experienced team executes the marketing campaigns with precision
            and attention to detail. From creating compelling ad creatives to
            targeting the right audience segments, we ensure that every campaign
            is executed flawlessly to achieve optimal results.
          </p>
          <div className="img_tag012">
            <img src={campaigns} alt="" />
            <p className="Img_alt_details">Executing Campaigns</p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------- */}

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
          <h1 className="text-center">
            Achieve{" "}
            <span
              style={{ color: "#F5900D", fontWeight: 700, fontSize: "50px" }}
            >
              10k+
            </span>{" "}
            downloads in just{" "}
            <span
              style={{ color: "#F5900D", fontWeight: 700, fontSize: "50px" }}
            >
              3 months
            </span>{" "}
            with our proven marketing strategies
          </h1>
        </div>
      </div>

      {/* --------------------------------------------- */}

      <Rating />
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

export default AppMarketing;
