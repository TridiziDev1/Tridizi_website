import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import bgImage from "../../assets/images/branding-bg.png";
import bppng from "../../assets/images/webiste-designing.png";
import testing from "../../assets/images/testing.png";
import serviceicon from "../../assets/images/serviceicon-4.png";
import ui from "../../assets/images/ui.png";
import goodtobuy from "../../assets/images/goodtobuy.png";
import egifthub from "../../assets/images/egifthub.png";
import subhasthira from "../../assets/images/subhasthira.png";
import metamutt from "../../assets/images/metamutt.png";
import trust from "../../assets/images/trust.png";
import link from "../../assets/images/link.png";
import hosting from "../../assets/images/hosting.png";
import sirinava from "../../assets/images/sirinava.png";
import devseccops from "../../assets/images/devseccops.png";
import VasaviSignatures from "../../assets/images/vasavi signatures.png";
import developmenting from "../../assets/images/developmenting.png";
import sv1 from "../../assets/images/serviceicon-1.png";
import sv2 from "../../assets/images/serviceicon-2.png";
import sv3 from "../../assets/images/serviceicon-3.png";
import tick from "../../assets/images/tick.png";
import servimg from "../../assets/images/servimg.jpeg";
import Footer from "../../Components/Footer/Footer";
import ClientImages from "../../Components/ClientsImages/ClientImages";
import "./Webdesign.css";
import ThirdPartyScripts from "../../Components/ThirdPartyScript/ThirdPartyScripts";
import Rating from "../../Components/Rating/Rating";

const Webdesign = () => {
  return (
    <>
      <ThirdPartyScripts />
      <SideBar />

      <Navbar bgImage={bgImage}>
        <div className="row">
          <div className="col-lg-7 col-sm-6 hero1">
            <p>
              TriDizi . <span style={{ color: "#F5900D" }}>Developing</span>
            </p>
            <h1 className="letter_spacing">Website Development</h1>
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
              Every business should need a website to be live. We understand the
              requirements of the niche or industry based on it we can give the
              best.
            </p>
            <div className="img_tag">
              <img src={serviceicon} alt="" />
              <p className="Img_alt_details">Requirements</p>
            </div>
          </div>
          {/* execution */}
          <div className="appmarketing_items2">
            <p>
              Never fails in Branding execution, On-time post-delivery, working
              on Engagement, Sharing to the respective platforms, etc.
            </p>
            <div className="img_tag">
              <img src={hosting} alt="" style={{ margin: "0 10px" }} />
              <p className="Img_alt_details">Hosting</p>
            </div>
          </div>

          <div className="appmarketing_items3">
            <p>
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={ui} alt="" />
              <p className="Img_alt_details">UI</p>
            </div>
          </div>
          <div className="appmarketing_items4">
            <p>
              We start by gaining a deep understanding of your business
              objectives, target audience, and unique selling propositions. By
              aligning our strategies with your goals.
            </p>
            <div className="img_tag">
              <img src={testing} alt="" />
              <p className="Img_alt_details">testing</p>
            </div>
          </div>
          <div className="appmarketing_items5">
            <p>
              We prepare the monthly Calendar prior to taking necessary
              execution without fail, which will give more trust in our work
              only.
            </p>
            <div className="img_tag">
              <img src={developmenting} alt="" />
              <p className="Img_alt_details">developmenting</p>
            </div>
          </div>
          <img src={bppng} className="bpImg01" alt="" />
          <span className="li-1">---------------------</span>
          <span className="li-2">---------------------</span>
          <span className="li-3">---------------------</span>
          <span className="li-4">---------------------</span>
          <span className="li-5">---------------------</span>
        </div>
      </section>
      {/* appmarketing_add_details minScreen */}

      <section className="webDesign_minScreen">
        <div className="para_img">
          <p className="para_img_p">
            Every business should need a website to be live. We understand the
            requirements of the niche or industry based on it we can give the
            best.
          </p>
          <div className="para_img_img">
            <img src={serviceicon} alt="" />
            <p className="para_img_title">Requirements</p>
          </div>
        </div>
        <div className="para_img" style={{ flexDirection: "row-reverse" }}>
          <p className="para_img_p">
            Never fails in Branding execution, On-time post-delivery, working on
            Engagement, Sharing to the respective platforms, etc.
          </p>
          <div className="para_img_img">
            <img src={hosting} alt="" style={{ margin: "0 10px" }} />
            <p className="para_img_title">Hosting</p>
          </div>
        </div>
        <div className="para_img">
          <p className="para_img_p">
            We start by gaining a deep understanding of your business
            objectives, target audience, and unique selling propositions. By
            aligning our strategies with your goals.
          </p>
          <div className="para_img_img">
            <img src={ui} alt="" />
            <p className="para_img_title">UI</p>
          </div>
        </div>
        <div className="para_img" style={{ flexDirection: "row-reverse" }}>
          <p className="para_img_p">
            We start by gaining a deep understanding of your business
            objectives, target audience, and unique selling propositions. By
            aligning our strategies with your goals.
          </p>
          <div className="para_img_img">
            <img src={testing} alt="" />
            <p className="para_img_title">testing</p>
          </div>
        </div>
        <div className="para_img">
          <p className="para_img_p">
            We prepare the monthly Calendar prior to taking necessary execution
            without fail, which will give more trust in our work only.
          </p>
          <div className="para_img_img">
            <img src={developmenting} alt="" />
            <p className="para_img_title">developmenting</p>
          </div>
        </div>
      </section>

      {/* ---------------- ----------------------------------------------------------- */}

      <div className="container-fluid folio" style={{ marginTop: "50px" }}>
        <div className="container separator" style={{ marginBottom: "50px" }}>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="dot"></div>
        <h1
          style={{ color: "#F5900D", textAlign: "center", fontWeight: "700" }}
        >
          Portfolio
        </h1>

        <div className="portfolio">
          <div className="row">
            <a
              href="https://goodtobuy.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="col-lg-12 col-md-6 col-sm-12 card port  bg-transparent ">
                <img className="image" src={goodtobuy} alt="goodtobuy" />
                <div className="middle">
                  <img src={link} alt="linkingicon" className="linkicon" />
                </div>
              </div>
            </a>
            <a
              href="http://subhasthira.goodtobuy.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="col-lg-12 col-md-6 col-sm-12 card port bg-transparent">
                <img className="image" src={subhasthira} alt="subhasthira" />
                <div className="middle">
                  <img src={link} alt="linkingicon" className="linkicon" />
                </div>
              </div>
            </a>
          </div>

          <div className="row">
            <a
              href="http://egifthub.goodtobuy.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="col-lg-12 col-md-6 col-sm-12 card port bg-transparent">
                <img className="image" src={egifthub} alt="egifthub" />
                <div className="middle">
                  <img src={link} alt="linkingicon" className="linkicon" />
                </div>
              </div>
            </a>
            <a
              href="http://metamutt.goodtobuy.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="col-lg-12 col-md-6 col-sm-12 card port bg-transparent">
                <img className="image" src={metamutt} alt="metamutt" />
                <div className="middle">
                  <img src={link} alt="linkingicon" className="linkicon" />
                </div>
              </div>
            </a>
          </div>

          <div className="row">
            <a
              href="https://helpingtogether2009.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="col-lg-12 col-md-6 col-sm-12 card port bg-transparent">
                <img className="image" src={trust} alt="trust" />
                <div className="middle">
                  <img src={link} alt="linkingicon" className="linkicon" />
                </div>
              </div>
            </a>
            <a
              href="https://sirinava.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="col-lg-12 col-md-6 col-sm-12 card port bg-transparent">
                <img className="image" src={sirinava} alt="Sirinava" />
                <div className="middle">
                  <img src={link} alt="linkingicon" className="linkicon" />
                </div>
              </div>
            </a>
          </div>

          <div className="row">
            <a
              href="https://devseccops.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="col-lg-12 col-md-6 col-sm-12 card port bg-transparent">
                <img className="image" src={devseccops} alt="devseccops" />
                <div className="middle">
                  <img src={link} alt="linkingicon" className="linkicon" />
                </div>
              </div>
            </a>
            <a
              href="https://sales.vasavisignature.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="col-lg-12 col-md-6 col-sm-12 card port bg-transparent">
                <img
                  className="image"
                  src={VasaviSignatures}
                  alt="Vasavi Signatures"
                />
                <div className="middle">
                  <img src={link} alt="linkingicon" className="linkicon" />
                </div>
              </div>
            </a>
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

export default Webdesign;
